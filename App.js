import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})


// import React, { Component } from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';

// export default class FlatListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={[
//             {key: 'Devin'},
//             {key: 'Dan'},
//             {key: 'Dominic'},
//             {key: 'Jackson'},
//             {key: 'James'},
//             {key: 'Joel'},
//             {key: 'John'},
//             {key: 'Jillian'},
//             {key: 'Jimmy'},
//             {key: 'Julie'},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })


// import React, { Component } from 'react';
// import { ScrollView, Image, Text } from 'react-native';

// export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//       return (
//         <ScrollView>
//           <Text style={{fontSize:96}}>Scroll me plz</Text>
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>If you like</Text>
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>Scrolling down</Text>
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>What's the best</Text>
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>Framework around?</Text>
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: 64, height: 64}} />
//           <Text style={{fontSize:80}}>React Native</Text>
//         </ScrollView>
//     );
//   }
// }


// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

// export default class Touchables extends Component {
//   _onPressButton() {
//     alert('You tapped the button!')
//   }

//   _onLongPressButton() {
//     alert('You long-pressed the button!')
//   }


//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableHighlight</Text>
//           </View>
//         </TouchableHighlight>
//         <TouchableOpacity onPress={this._onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableOpacity</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableNativeFeedback
//             onPress={this._onPressButton}
//             background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
//           </View>
//         </TouchableNativeFeedback>
//         <TouchableWithoutFeedback
//             onPress={this._onPressButton}
//             >
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//           </View>
//         </TouchableWithoutFeedback>
//         <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Touchable with Long Press</Text>
//           </View>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     alignItems: 'center'
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     textAlign: 'center',
//     padding: 20,
//     color: 'white'
//   }
// });



// import React, { Component } from 'react';
// import { Button, StyleSheet, View } from 'react-native';

// export default class ButtonBasics extends Component {
//   _onPressButton() {
//     alert('You tapped the button!')
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//             color="#841584"
//           />
//         </View>
//         <View style={styles.alternativeLayoutButtonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="This looks great!"
//           />
//           <Button
//             onPress={this._onPressButton}
//             title="OK!"
//             color="#841584"
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// });


// import React, { Component } from 'react';
// import { Text, TextInput, View } from 'react-native';

// export default class PizzaTranslator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }

//   render() {
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({text})}
//           value={this.state.text}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }


// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// class Greeting extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Text style={{fontSize:20}}>Hello {this.props.name}!</Text>
//       </View>
//     );
//   }
// }

// export default class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center', top: 50}}>
//         <Greeting name='Sefat' />
//         <Greeting name='Anam' />
//         <Greeting name='Valeera' />
//       </View>
      
//     );
//   }
// }



// import React, { Component } from 'react';
// import { Image, View, Text } from 'react-native';

// export default class Bananas extends Component {
//   render() {
//     let pic = {
//       uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
//     };
//     return (
//       <View style={{alignItems:"center",alignContent:"center"}}>
        
//         <Image source={pic} style={{ width: 480, height: 720 }} />
//         <Text style={{fontSize:29}}>Hello Sefat !</Text>
//       </View>

//     );
//   }
// }


// import React, { Component } from 'react';
// import { Text, View } from 'react-native';

// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Hello, world!</Text>
//         <Text>Hello Sefat</Text>
//       </View>
//     );
//   }
// }


