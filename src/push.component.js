import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, ToastAndroid, TextInput } from 'react-native'
import{ HmsPushInstanceId, HmsPushEvent, HmsPushMessaging, RNRemoteMessage, HmsLocalNotification }from "@hmscore/react-native-hms-push";

export default class PushComponent extends Component {


  constructor(props) {
    super(props);

    this.state = {
      log: "",
      topic: "",
    };

  }

  log(tag, msg) {
    this.setState(
      {
        log: `[${tag}]: ${JSON.stringify(msg, "\n", 4)} \n ${this.state.log}`,
      },
      this.toast(JSON.stringify(msg, "\n", 4))
    );
  }

  toast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

            // Registering
  componentDidMount(){
    this.onTokenReceivedListener = HmsPushEvent.onTokenReceived((result) => {
      this.log("onTokenReceived", result);
    });

    this.onTokenErrorListener = HmsPushEvent.onTokenError((result) => {
      this.log("onTokenError", result);
    });

    this.onRemoteMessageReceivedListener = HmsPushEvent.onRemoteMessageReceived(
      (result) => {
        const RNRemoteMessageObj = new RNRemoteMessage(result.msg);
        HmsLocalNotification.localNotification({
          [HmsLocalNotification.Attr.title]: "DataMessage Received",
          [HmsLocalNotification.Attr
            .message]: RNRemoteMessageObj.getDataOfMap(),
        });
        this.log("onRemoteMessageReceived", result);
        console.log('onRemoteMessageReceived: ', result);
      }
    );
  

  }
  
  // Unregistering
  componentWillUnmount(){
    this.onTokenReceivedListener.remove();
    this.onTokenErrorListener.remove();
    this.onRemoteMessageReceivedListener.remove();
  }


  turnOnPush() {
    HmsPushMessaging.turnOnPush()
    .then((result) => {
      this.log("turnOnPush", result);
    })
    .catch((err) => {
      alert("[turnOnPush] Error/Exception: " + JSON.stringify(err));
    });
  }

  turnOffPush() {
    HmsPushMessaging.turnOffPush()
    .then((result) => {
      this.log("turnOffPush", result);
    })
    .catch((err) => {
      alert("[turnOffPush] Error/Exception: " + JSON.stringify(err));
    });
  }

  onChangeTopic(inputData) {
    this.setState({
      topic: inputData,
    });
  }


    getToken() {
        HmsPushInstanceId.getToken("")
          .then((result) => {
            this.log("getToken", result);
            console.log(result)
          })
          .catch((err) => {
            console.log(err)
          });
      }

      subscribe() {
        console.log('this.state.topic: ', this.state.topic);
        HmsPushMessaging.subscribe(this.state.topic)
        .then((result) => {
          this.log("subscribe", result);
        })
        .catch((err) => {
          alert("[subscribe] Error/Exception: " + JSON.stringify(err));
        });
      }
    
      unsubscribe() {
        HmsPushMessaging.unsubscribe(this.state.topic)
          .then((result) => {
            this.log("unsubscribe", result);
          })
          .catch((err) => {
            alert("[unsubscribe] Error/Exception: " + JSON.stringify(err));
          });
      }

    render() {
        return (
          <ScrollView>
            <View >
                <View style={styles.container}>

                            <TouchableOpacity
                        style={[styles.buttonContainer, styles.primaryButton]}
                        onPress={() => {
                        this.getToken();
                        }}
                    >
                        <Text style={styles.buttonText}>Get Token</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.buttonContainer, styles.primaryButton]}
                        onPress={() => {
                        this.turnOnPush();
                        }}
                    >
                        <Text style={styles.buttonText}>Turn on push</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.buttonContainer, styles.primaryButton]}
                        onPress={() => {
                        this.turnOffPush();
                        }}
                    >
                        <Text style={styles.buttonText}>Turn off push</Text>
                    </TouchableOpacity>

                </View>



                <View style={styles.container}>
                    <TextInput
                          value={this.state.topic}
                          style={styles.inputTopic}
                          placeholder="topic"
                          onChangeText={(e) => this.onChangeTopic(e)}
                        />
                      

               
                </View>

                <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.buttonContainer, styles.primaryButton]}
                    onPress={() => {
                      this.subscribe();
                    }}
                  >
                    <Text style={styles.buttonText}>Subscribe</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.buttonContainer, styles.primaryButton]}
                    onPress={() => {
                      this.unsubscribe();
                    }}
                  >
                    <Text style={styles.buttonText}>UnSubscribe</Text>
                  </TouchableOpacity>
                </View>

                <ScrollView style={styles.containerShowResultMsg}>
                  <Text>{this.state.log}</Text>
                </ScrollView>

              

            </View>
          </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

    containerShowResultMsg: {
        flexDirection: 'row',
        margin: 15,
        borderTopWidth: 1,
        paddingTop: 10,
        borderColor: '#aaa'
      },
    
      inputTopic: {
        textAlign: 'center',
        padding: 10,
        width: '100%',
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#aaa'
      },
      width70: {
        width: '70%',
      },
      width35: {
        width: '35%',
      },
      width30: {
        width: '30%',
      },
      paddingTop20:{
        paddingTop:12
      },
    
      imageView: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
      },
      image: {
        justifyContent: 'flex-start',
        width: 400,
        height: 80,
      },
    
      paddingX: {
        paddingTop: 75,
      },
    
      container: {
        margin: 5,
        flex: 1,
        flexDirection: 'row',
      },
    
      containerSlim: {
        marginBottom: 0,
        marginTop: 2,
      },
    
      buttonContainer: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
      },
    
      buttonContainerSlim: {
        marginBottom: 2,
        marginTop: 2,
      },
    
      primaryButton: {
        backgroundColor: '#c9c9c9',
      },
    
      secondaryButton: {
        backgroundColor: '#5ea6ff',
      },
    
      tertiaryButton: {
        backgroundColor: '#ff825c',
      },
    
      buttonText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
      },
    
      buttonTextSmall: {
        fontSize: 16, 
      },
    
      buttonTextSmallest: {
        fontSize: 14, 
      },
    
      fontSizeSmall: {
        fontSize: 16
      }
      
})

