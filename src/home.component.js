import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity, 
    Button,
    
  } from 'react-native';
  
  import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';


const HomeComponent = ({ navigation }) => {

    return (
        <>
      
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
            
                
                <TouchableOpacity 
                    style={styles.button}
               
                  
                >
                   <Button 
                   
                    title="Go to Ads"
                    onPress={() => navigation.navigate('Ads')}
                />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                 
                  
                >
                   <Button 
                   
                    title="Go to Analytics"
                    onPress={() => navigation.navigate('Analytics')}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                 
                  
                >
                   <Button 
                   
                    title="Go to Location"
                    onPress={() => navigation.navigate('Location')}
                    />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                >
                   <Button 
                    title="Go to Map"
                    onPress={() => navigation.navigate('Map')}
                    />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button}
                >
                   <Button 
                    title="Go to Map Demo"
                    onPress={() => navigation.navigate('MapDemo')}
                    />
                </TouchableOpacity>
                


              </View>
             
         
             
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
}

export default HomeComponent

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
      },
      engine: {
        position: 'absolute',
        right: 0,
      },
      body: {
        backgroundColor: Colors.white,
      },
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
      },
      highlight: {
        fontWeight: '700',
      },
      footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
      },
      button:{
          marginTop:10
      }
})
