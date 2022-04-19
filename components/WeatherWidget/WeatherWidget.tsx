import { Box, Flex, Image,Spacer, Text } from "@chakra-ui/react";


interface WeatherWidgetProps{
    bgImg:string,
    icon:string,
    temperature:number,
    wind:number,
    minTemp:number,
    maxTemp:number,
    precipitation: number
}

export default function WeatherWidget({bgImg,icon,temperature, wind, minTemp, maxTemp, precipitation}:WeatherWidgetProps) {

    return (
        <Box minH={150} minW={200} maxH={200} maxW={300} rounded={'md'} bgSize={'cover'} bgPos={'center'} bgImage={bgImg}>
            <Flex flexDirection={'column'} gap={5} padding={6}   >
                <Flex justifyContent={'space-between'} >
                    <Image  src={icon} bgPos={'center'} bgSize={'contain'} alt={''} />
                    <Spacer></Spacer>
                    <Box fontWeight={'extrabold'} > { `${temperature}°`} </Box>
                    <Spacer></Spacer>
                </Flex>
                <Flex justify={'space-between'}>
                <Box fontWeight={'bold'} textAlign={'center'}>
                        <Text> wind </Text>
                        <Text> {wind} </Text>
                    </Box>
                    <Box fontWeight={'bold'} textAlign={'center'} >
                        <Text> Min / Max </Text>
                        <Text> { `${minTemp} / ${maxTemp}`} </Text>
                    </Box>
                    <Box fontWeight={'bold'} textAlign={'center'}>
                        <Text> Precipitation </Text>
                        <Text> { `${precipitation}%`} </Text>
                    </Box>

                </Flex>
            </Flex>
        </Box>
    );
}