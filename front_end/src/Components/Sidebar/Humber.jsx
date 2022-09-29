import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
   
    Box,
    Flex,
    Text,
    Image,
   
} from '@chakra-ui/react'
import React from 'react'
import { HamburgerIcon, EmailIcon } from '@chakra-ui/icons'
import {NavLink} from "react-router-dom"
import { IoLogOutOutline } from "react-icons/io5"
import { HiOutlineHome } from "react-icons/hi";
import { BsClock } from "react-icons/bs"
import { BiBusSchool } from "react-icons/bi"
import { MdOutlinePersonPin } from "react-icons/md"
import { TbUsers } from "react-icons/tb"
import { FiPieChart } from "react-icons/fi"
import { AiOutlineSetting } from "react-icons/ai"
import {FcBusinessman} from "react-icons/fc"
import {ImProfile} from "react-icons/im"
import everhour from "./images/everhour.png"





export default function Humber() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
        <Flex justifyContent='space-between' >

       
        <Box>
              <Button size={"sm"} m='2'  onClick={onOpen}>
                <HamburgerIcon boxSize={4} />
            </Button>
        </Box>

        <Box>
          <Flex alignItems='center'>
            <Text color="#57534e " fontWeight={"medium"} fontSize='xl' textDecoration='underline'  >Everhour</Text>
          <Image m={2} w={'37px'} src={everhour} />
          </Flex>
        </Box>

        </Flex>


            <Drawer
                width="100%"
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader  textDecoration='underline'>
                        <Flex gap={2}>
                            <span>
                                <Text color={'teal'}>WEB</Text>
                            </span>

                            <Flex>
                                <span>
                                    <Text color={'yellow'}>DEV</Text>
                                </span>
                                <span>
                                    <Text color={'blue'}>ELOPER</Text>
                                </span>
                            </Flex>
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody bg='blackAlpha.200'>
                       
                            {/* <Box ><Text   cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><NavLink onClick={onClose} to='/' spy={true} smooth={true}>Home</NavLink></Text></Box>
                            <Box ><Text  cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><NavLink onClick={onClose} to='tech-stack' spy={true} smooth={true}>TimeECH-STACK</NavLink></Text></Box>
                            <Box ><Text  cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><NavLink onClick={onClose} to='skills' spy={true} smooth={true}>Projects</NavLink></Text></Box>
                            <Box ><Text  cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><NavLink onClick={onClose} to='projects' spy={true} smooth={true}>Clients</NavLink></Text></Box>
                            <Box ><Text  cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><NavLink onClick={onClose} to='contact' spy={true} smooth={true}>Reports</NavLink></Text></Box> */}
<Box width="100%" >
                <Flex gap={10}>
                    <NavLink to='/'  >
                        <Flex gap={3} mb="1.5em" alignItems="center" >
                            <Image src={everhour} w='25px' onClick={onClose} />
                            <Text    onClick={onClose}   color="#57534e " fontWeight={"semibold"} fontSize='sm' textDecoration='underline' >Everhour</Text>

                        </Flex>
                    </NavLink>
                    {/* <FcMenu  color='#57534e ' fontSize="25px" /> */}

                </Flex>
                <NavLink to="/">
                    <Flex gap={3} mb="1.5em" alignItems="center"  _hover={{bg:"#ccfbf1 "}}  >
                        <HiOutlineHome opacity={0.8} color='#57534e ' fontSize="25px"   onClick={onClose}   />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm'   onClick={onClose}   >Home</Text>
                    </Flex>
                </NavLink>
                <NavLink to="/time">
                    <Flex gap={3} mb="1.5em" alignItems="center"   _hover={{bg:"#ccfbf1 "}}>
                        <BsClock color='#57534e ' opacity={0.8} fontSize="23px"   onClick={onClose}   />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm'    onClick={onClose}  >Time</Text>
                    </Flex>
                </NavLink>
                <NavLink to='/project' >
                    <Flex gap={3} mb="1.5em" alignItems="center"   _hover={{bg:"#ccfbf1 "}} >
                        <BiBusSchool fontSize="23px" opacity={0.8} color='#57534e'   onClick={onClose}   />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm'    onClick={onClose}  >Projects</Text>
                    </Flex>
                </NavLink>
                <NavLink to='/client'>
                    <Flex gap={3} mb="1.5em" alignItems="center"   _hover={{bg:"#ccfbf1 "}} >
                        <MdOutlinePersonPin fontSize="23px" color='#57534e' opacity={0.8}   onClick={onClose}   />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm'    onClick={onClose}  >Clients</Text>
                    </Flex>
                </NavLink>
                <NavLink to="team">
                    <Flex gap={3} mb="1.5em" alignItems="center"   _hover={{bg:"#ccfbf1 "}} >
                        <TbUsers fontSize="23px" color='#57534e' opacity={0.8}   onClick={onClose}   />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm'   onClick={onClose}   >Team</Text>
                    </Flex>
                </NavLink>
                <NavLink to="report" >
                    <Flex gap={3} mb="1.5em" alignItems="center"   _hover={{bg:"#ccfbf1 "}} >
                        <FiPieChart fontSize="23px" color='#57534e' opacity={0.8}    onClick={onClose}  />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm'   onClick={onClose}   >Reports</Text>
                    </Flex>
                </NavLink>
                <Box border={'0.5px solid pink'} mb="1em" ></Box>
                <NavLink to="/setting" >
                    <Flex gap={3} mb="1em" alignItems="center"   _hover={{bg:"#ccfbf1 "}} >
                        <AiOutlineSetting fontSize="23px" color='#57534e' opacity={0.8}   onClick={onClose}   />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm'    onClick={onClose}  >Settings</Text>
                    </Flex>
                </NavLink>

                <Box border={'0.5px solid pink'} mb="1em" ></Box>

                <NavLink to="/profile" >
                    <Flex gap={3} mb="1.5em" alignItems="center"   _hover={{bg:"#ccfbf1 "}} >
                        <ImProfile fontSize="23px" color='#57534e' opacity={0.8}    onClick={onClose}  />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm'    onClick={onClose}  >My Profile</Text>
                    </Flex>
                </NavLink>

                <NavLink to="/signout" >
                    <Flex gap={3} mb="2em" alignItems="center"   _hover={{bg:"#ccfbf1 "}} >
                        <IoLogOutOutline fontSize="23px" color='#57534e' opacity={0.8}   onClick={onClose}   />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='sm'    onClick={onClose}  >Sign Out</Text>
                    </Flex>
                </NavLink>

                <Box border={'0.5px solid pink'} mb="1em" ></Box>
                <Flex gap={3} mb="1.5em" alignItems="center"   _hover={{bg:"#ccfbf1 "}} >
                        <FcBusinessman fontSize="25px"    onClick={onClose}   />
                        <Text color="#57534e " fontWeight={"semibold"} fontSize='md'   onClick={onClose}   >Pravhat Ray</Text>
                    </Flex>



            </Box>

                       
                    </DrawerBody>

                    {/* <DrawerFooter>
                    <Flex columnGap={11} justifyContent="space-around">
                            <Link to='contact' spy={true} smooth={true}>
                            <Button _focus={{outline:"none"}} onClick={onClose} size={'lg'} bgColor="teal" color={'white'}>Hire me</Button>
                            </Link>
                            <a href="mailto:pravhatray@gmail.com">

                            <IconButton size='lg' colorScheme='teal' _focus={{ outline: "none" }} icon={<EmailIcon color='white ' />} />

                            </a>

                            
                            <a href='https://github.com/pravhatray'  target="_blank">
                                <IconButton size='lg' colorScheme='teal' _focus={{outline:"none"}} icon={<FaGithub />} />
                            </a>

                            <a href='https://www.linkedin.com/in/pravhat-ray-842851236/'  target="_blank"><IconButton size='lg' _focus={{outline:"none"}} colorScheme='teal' icon={<FaLinkedin />} /></a>
                            </Flex>
                    </DrawerFooter> */}
                </DrawerContent>
            </Drawer>
        </>
    )
}