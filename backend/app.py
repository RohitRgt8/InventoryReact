from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS
from bson import json_util
import json
import boto3
from botocore.exceptions import NoCredentialsError

app = Flask(__name__)
CORS(app)
client = MongoClient('mongodb+srv://rohit008:rohitrgt8@cluster0.ypxjwp2.mongodb.net/')
db = client['INVENTORY']
emp_collection = db['Employee']
customer_collection = db['Customer']
product_collection = db['Product']

S3_BUCKET = 'keystoneimages'
AWS_ACCESS_KEY = ""
AWS_SECRET_ACCESS_KEY = ""
s3 = boto3.client('s3',
                  aws_access_key_id=AWS_ACCESS_KEY,
                  aws_secret_access_key=AWS_SECRET_ACCESS_KEY)

@app.route('/employee', methods=['POST'])
def add_employee():
    data = request.json
    name = data.get('name')
    address = data.get('address')
    phone = data.get('phone')

    new_employee = {
        'name': name,
        'address': address,
        'phone': phone
    }

    result = emp_collection.insert_one(new_employee)

    return jsonify({'message': 'Employee added successfully', 'id': str(result.inserted_id)}), 200

@app.route('/get-employees', methods=['GET'])
def get_employees():
    employees = list(emp_collection.find())
    if employees :
        for employee in employees:
            employee['id'] = str(employee['_id'])
        return json.dumps(employees, default=json_util.default), 200
    else :
        return json.dumps(default=json_util.default), 401
    
@app.route('/customer', methods=['POST'])
def add_customer():
    data = request.json
    name = data.get('name')
    address = data.get('address')
    phone = data.get('phone')
    email = data.get('email')
    designation = data.get('designation')

    new_customer = {
        'name': name,
        'address': address,
        'phone': phone,
        'email': email,
        'designation' : designation
    }

    result = customer_collection.insert_one(new_customer)

    return jsonify({'message': 'Customer added successfully', 'id': str(result.inserted_id)}), 200

@app.route('/get-customers', methods=['GET'])
def get_customers():
    customers = list(customer_collection.find())
    print(customers)
    if customers :
        for customer in customers:
            customer['id'] = str(customer['_id'])
        return json.dumps(customers, default=json_util.default), 200
    else :
        return json.dumps(default=json_util.default), 401

@app.route('/product', methods=['POST'])
def add_product():
    name = request.form['name']
    type = request.form['type']
    qty = request.form['qty']
    price = request.form['price']
    description = request.form['description']
    image = request.files['image']

    try:
        s3.upload_fileobj(image, S3_BUCKET, image.filename, ExtraArgs={'ACL': 'public-read'})
        image_url = f"https://{S3_BUCKET}.s3.amazonaws.com/{image.filename}"
    except NoCredentialsError:
        return jsonify({'message': 'AWS credentials not available'}), 500

    product_data = {
        'name': name,
        'type': type,
        'qty': qty,
        'price': price,
        'description': description,
        'img': image_url
    }
    try:
        result = product_collection.insert_one(product_data)
        return jsonify({'message': 'Product added successfully', 'id': str(result.inserted_id)}), 201
    except Exception as e:
        return jsonify({'message': f'Failed to add product: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/get-products', methods=['GET'])
def get_products():
    products = list(customer_collection.find())
    print(products)
    if products :
        for product in products:
            product['id'] = str(product['_id'])
        return json.dumps(products, default=json_util.default), 200
    else :
        return json.dumps(default=json_util.default), 401
