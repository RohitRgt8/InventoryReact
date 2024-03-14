import React from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

import aus from "../assets/aus.png";
import { st } from '../productsStore/St'; 

const SinglePageFAQ = () => {
    return (
        <div>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                <b>PRODUCT INFO</b>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {st.map((item) => (
                            <p key={item.id}>{item.descr}</p>
                        ))}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default SinglePageFAQ;