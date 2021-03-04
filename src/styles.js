/*
    Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bg: { backgroundColor: '#eee' },
  
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  containerCenter: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 150,
  },

  centerImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgButton: {
    width: 57,
    height: 48,
  },

  containerList: {
    marginTop:10,
    height:400,
   },
   item: {
     padding: 8,
     fontSize: 14,
     height: 40,
     alignSelf:"center",
   },



  containerFlexCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 15,
  },

  containerFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 25,
  },

  button: {
    width: '33%',
    height: 80,
  },

  buttonTts: {
    width: '83%',
    height: 30,
    alignSelf: "center",
    marginTop: 10,
    marginBottom:10,
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
  right: {
    justifyContent: 'flex-end',
  },

  h1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    borderBottomWidth: 1,
    padding: 25,
    borderBottomColor: '#D3D3D3',
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    padding: 15,
  },

  customInput: {
    height: 40,
    borderColor: '#42aaf5',
    borderWidth: 2,
    width: "50%",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    color: "#000"
  },

  customEditBox: {
    height: 450,
    borderColor: 'gray',
    borderWidth: 2,
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    color: "#000"
  },

  customEditBox3: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 2,
    width: "83%",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    color: "#000"
  },

  customEditBox2: {
    height: 250,
    borderColor: 'gray',
    borderWidth: 2,
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    color: "#000"
  },

  buttonRadius: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#888',
  },

  startButton: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#888',
    backgroundColor: '#42aaf5',
  },
  startButtonLabel: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  buttonText: {
    color: '#000',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },


  borderedText: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fee',
  },

  speakButton: {
    color: '#000',
    width: 200,
    textAlignVertical: "center", textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'blue'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  img: {
    width: '100%',
    height: 200,
  },

  h1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    borderBottomWidth: 2,
    padding: 20,
    borderBottomColor: '#AAAAAA',
    width: '95%',
    alignSelf: 'center'
  },

  containerFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },

  button: {
    width: '32%',
    height: 95,
  },

  buttonRadius: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#AAAAAA',
  },

  imgButton: {
    width: 57,
    height: 48,
  },

  buttonText: {
    color: '#000',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  centerImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  baseView: {
    flex: 1,
    backgroundColor: '#E5E5E5'
  },

  connectionInput: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10,
    borderWidth: 2,
    borderColor: '#AAAAAA'
  },
  sendButton: {
    width: 35,
    height: 35,
    marginLeft: 12
  },
  toolbar: {
    width: '100%',
    height: 55,
    justifyContent: 'center',
    backgroundColor: '#AAAAAA',
    elevation: 5,
  },
  titleToolbar: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    alignSelf: 'center',
  },
  sendedMessageView: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 6,
    marginTop: 6
  },
  sendedMessageContent: {
    borderRadius: 10,
    width: 170,
    backgroundColor: '#000749',
    color: 'white',
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 9,
    paddingRight: 9,
    overflow: 'hidden'
  },
  receivedMessageView: {
    marginLeft: 10,
    marginBottom: 6,
    marginTop: 6,
  },
  receivedMessageContent: {
    borderRadius: 10,
    width: 170,
    backgroundColor: '#420002',
    color: 'white',
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 9,
    paddingRight: 9,
    overflow: 'hidden'
  },

  basicButton: {
    width: '95%',
    height: 50,
    alignSelf: "center",
    marginTop: 5,
  },

  viewdividedtwo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    width: '95%',
    marginTop: 10
  },
  halfItem1: {
    width: '80%',
    alignSelf: 'center'
  },
  halfItem4: {
    width: '30%',
    alignSelf: 'center'
  },
  halfItem2: {
    width: '20%',
    alignSelf: 'center'
  },
  halfItem3: {
    width: '50%',
    alignSelf: 'center'
  },
  customInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 2,
    width: "95%",
    alignSelf: "center",
    marginTop: 5,
    backgroundColor: "#fff",
    color: "#000"
  },

  basicButtonOpacity: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#888',
    backgroundColor: '#7a7878',
  },

  basicButtonLabel: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  bg: { backgroundColor: '#EEF2F3' },

  imageSelectView: {
    width: 200,
    height: 200,
  },

  superres: {
    flex: 1,
    alignSelf: 'stretch',
    width: win.width,
    height: win.height,
  },

  h1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    borderBottomWidth: 1,
    padding: 20,
    borderBottomColor: '#D3D3D3',
    width: '95%',
    alignSelf: 'center'
  },

  normalView: {
    backgroundColor: '#EEF2F3',
    flex: 1,
    flexDirection: 'column',
  },

  baseItemContainer: {
    marginTop: 10,
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    height: '33%'
  },

  viewdividedtwo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '95%',
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  itemOfView: {
    width: '70%',
    alignSelf: 'center'
  },

  itemOfView3: {
    width: '30%',
    alignSelf: 'flex-end'
  },

  dividedDropdown: {
    borderWidth: 2,
    borderColor: 'gray',
    height: 40,
    marginTop: 5
  },

  longDropdown: {
    backgroundColor: '#fafafa',
    width: '95%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'gray',
    marginTop: 5
  },


  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  containerCenter: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
  },

  centerImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgButton: {
    width: 57,
    height: 48,
  },

  containerFlexCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 15,
  },

  containerFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 15,
  },

  button: {
    width: '32%',
    height: 80,
  },

  basicButton: {
    width: '95%',
    height: 50,
    alignSelf: "center",
    marginTop: 5,
  },

  menuButton: {
    width: '100%',
    height: 50,
    alignSelf: "center",
    marginTop: 5,
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
  right: {
    justifyContent: 'flex-end',
  },


  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    padding: 15,
  },

  customInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 2,
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    color: "#000"
  },

  customInput2: {
    height: 75,
    borderColor: 'gray',
    borderWidth: 2,
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    color: "#000"
  },

  customEditBox: {
    height: 250,
    borderColor: 'gray',
    borderWidth: 2,
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    color: "#000"
  },

  customEditBox2: {
    height: 230,
    width: "95%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    color: "#000",
    borderColor: '#D3D3D3',
    borderWidth: 1,
    textAlign: 'center'
  },

  buttonRadius: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#888',
  },

  startButton: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#888',
    backgroundColor: '#7a7878',
  },
  startButtonclicked: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#888',
    backgroundColor: 'green',
  },
  startButtonLabel: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  buttonText: {
    color: '#000',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },


  borderedText: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fee',
  },

  speakButton: {
    color: '#000',
    width: 200,
    textAlignVertical: "center", textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'blue'
  }

});
