import { StyleSheet, Text, View, Image, Animated, Dimensions } from 'react-native'
import React from 'react'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Carousel from 'react-native-snap-carousel';


const Home = () => {
    const carouselRef = React.useRef(null);


    const carouselData = [
        { id: '1', image: require('./Assets/lion.jpg') },
        { id: '2', image: require('./Assets/bear.jpg') },
        { id: '3', image: require('./Assets/cat.jpg') },
        { id: '4', image: require('./Assets/dog.jpg') },
        { id: '5', image: require('./Assets/tiger.jpg') },
    ]
    const renderItem = ({ item }) => {
        return (
            <View style={{ width, justifyContent: 'center' }}>
                <Image source={item.image} style={{ width: 300, height: 300 }} />
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>


            <Carousel
                ref={carouselRef}
                data={carouselData}
                renderItem={renderItem}
                sliderWidth={width}
                itemWidth={300}
                autoplay={true}
                autoplayInterval={3000}
                loop={true}
                pagination={true}
            >
            </Carousel>
            
        </View>
    )
}

export default Home;
const { width } = Dimensions.get('window');
