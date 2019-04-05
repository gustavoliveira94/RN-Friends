import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableHighlight, FlatList } from 'react-native'
import friend from '../../utils/json/friend.json'

export default class Friends extends Component {

    state = {
        data: [],
        dataFilter: [],
        follow: [],
        followAll: [],
        query: ''
    }

    componentDidMount() {
        this.setState({
            data: friend,
            dataFilter: friend
        })

        let result = []
        friend.map((data, index) =>
            result.push(index)
        )
        this.setState({
            followAll: result.join(',')
        })
    }

    filterList = (text) => {
        const newData = dataFilter.filter((item) => {
            const itemData = item.name.toLowerCase()
            const textData = text.toLowerCase()
            return itemData.toLowerCase().includes(textData)
        });
        this.setState({
            query: text,
            data: newData
        });
    }


    follow = (index) => {
        let follow = follow
        if (!follow.includes(index)) {
            follow.push(index)
            this.setState({
                data: [...this.state.data],
                follow: follow
            })
        } else {
            let f = follow.indexOf(index)
            follow.splice(f, 1);
            this.setState({
                data: [...this.state.data],
                follow: follow
            })
        }
    }

    followAll = () => {
        this.setState({
            data: [...data],
            follow: followAll
        })
        if (follow.includes(followAll)) {
            this.setState({
                follow: [],
                data: [...data]
            })
        }
    }

    render() {

        const { data, dataFilter, follow, followAll, query } = this.state

        return (
            <View style={styles.container}>
                <View style={styles.contentBallon}>
                    <Image
                        source={require('../../assets/mate.png')}
                        style={{ width: 50, height: 50 }}
                    />
                    <ImageBackground source={require('../../assets/ballon.png')} style={styles.bgBallon}>
                        <Text style={styles.textBallon}>Suas recomendações tão</Text>
                        <Text style={styles.textBallon}>vindo em #velocidademáxima</Text>
                    </ImageBackground>
                </View>
                <View style={styles.contentSearch}>
                    <TextInput
                        style={styles.searchFriends}
                        onChangeText={text => this.filterList(text)}
                        value={query}
                        placeholder="Buscar pelo nome"
                    />
                </View>
                <View style={styles.contentFollow}>
                    <View style={styles.friends}>
                        <Text style={{ color: 'rgb(102, 102, 102)' }}>{data.map((data, index) => index).slice(0).length > 10 ? this.state.data.map((data, index) => index).slice(0, -1).length : this.state.data.map((data, index) => index).slice(0).length} amigos</Text>
                    </View>
                    <View style={styles.follow}>
                        <TouchableHighlight
                            style={styles.buttonFollow}
                            onPress={() => this.followAll()}
                        >
                            <Text style={styles.textFollow}>{followAll === follow ? '- Deixar de seguir' : '+ Seguir todos'}</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.contentList}>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.name}
                        renderItem={({ item, index }) =>
                            <View style={styles.contentFriend}
                            >
                                <View style={styles.namePhotoContent}>
                                    <Image source={{ uri: item.image }} style={styles.photo} />
                                    <Text style={styles.name}>{item.name}</Text>
                                </View>
                                <View>
                                    <TouchableHighlight
                                        style={{ justifyContent: 'center', alignItems: 'center' }}
                                        onPress={() => this.follow(index)}
                                    >
                                        <Image
                                            style={{ width: 25, height: 25, marginRight: 10 }}
                                            source={follow.includes(index) ? require('../../assets/seguindo.png') : require('../../assets/encontrar-amigos.png')}
                                        />
                                    </TouchableHighlight>
                                </View>
                            </View>
                        }
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    contentBallon: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgb(242, 242, 242)',
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    bgBallon: {
        width: 280,
        height: 65,
        paddingLeft: 40,
        paddingTop: 10
    },
    textBallon: {
        fontSize: 14,
        color: 'rgb(102, 102, 102)'
    },
    contentSearch: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'rgb(242, 242, 242)',
    },
    searchFriends: {
        width: '100%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 6
    },
    contentFollow: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#fff',
        borderBottomColor: 'rgb(242, 242, 242)',
        borderBottomWidth: 1
    },
    buttonFollow: {
        borderRadius: 4,
        paddingTop: 10,
        paddingBottom: 10,
        width: 150,
        height: 40,
        backgroundColor: 'rgb(0, 169, 168)'
    },
    textFollow: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16
    },
    namePhotoContent: {
        height: 200,
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    photo: {
        width: 70,
        height: 70,
        borderRadius: 100
    },
    name: {
        marginLeft: 20,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'left',
        color: 'rgb(102, 102, 102)'
    },
    buttonFollowAll: {
        borderRadius: 4,
        paddingTop: 10,
        paddingBottom: 10,
        width: 150,
        height: 40,
        backgroundColor: 'rgb(0, 169, 168)'
    },
    contentList: {
        flex: 2.8,
        paddingLeft: 15,
        paddingRight: 15
    },
    contentFriend: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100,
        borderBottomColor: 'rgb(242, 242, 242)',
        borderBottomWidth: 1
    }
})
