// import React, {Component} from 'react';
// import {ActivityIndicator, Text, View} from 'react-native';
// import Geolocation from 'react-native-geolocation-service';

// export default class getTime extends Component {
//   constructor() {
//     super();
//     this.state = {
//       ip: '',
//       date: '',
//       jadwal: '',
//       time: '',
//       coords: '',
//       location: '',
//       city: [],
//       city_id: '',
//     };
//   }

//   componentDidMount() {
//     // this.getLocation();
//   }

//   getIp() {
//     console.log('mengambil ip..');
//     fetch('https://api.ipify.org?format=json', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((responseJSON) => {
//         this.setState({ip: responseJSON.ip});
//         console.log(this.state.ip);
//         this.getDate();
//       })
//       .catch((err) => console.log(err));
//   }

//   getDate() {
//     console.log('mengambil waktu..');
//     fetch(`https://time.siswadi.com`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((responseJSON) => {
//         this.setState({date: responseJSON.data.date});
//         console.log(this.state.date);
//         this.getSchedule();
//       })
//       .catch((err) => console.log(err));
//   }

//   getSchedule() {
//     console.log('mengambil jadwal asli..');
//     fetch(
//       `http://api.pray.zone/v2/times/day.json?ip=${this.state.ip}&date=${this.state.date}`,
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       },
//     )
//       .then((response) => response.json())
//       .then((responseJSON) => {
//         console.log(responseJSON.results.datetime);
//       })
//       .catch((err) => console.log(err));
//   }

//   getLocation() {
//     console.log('mengambil koordinat..');
//     Geolocation.getCurrentPosition(
//       (position) => {
//         this.setState({coords: position.coords});
//         console.log(this.state.coords);
//         this.getLocationInfo();
//       },
//       (error) => {
//         console.log(error.code, error.message);
//       },
//       {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
//     );
//   }

//   getLocationInfo() {
//     console.log('mengambil info lokasi..');
//     fetch(
//       `https://nominatim.openstreetmap.org/reverse?lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}&format=json`,
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       },
//     )
//       .then((response) => response.json())
//       .then((responseJSON) => {
//         this.setState({
//           location: responseJSON,
//         });
//         console.log(this.state.location.display_name);
//       })
//       .catch((err) => console.log(err));
//   }

//   getCity() {
//     console.log('mengambil kota..');
//     fetch(`https://api.banghasan.com/sholat/format/json/kota`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((responseJSON) => {
//         this.setState({city: responseJSON.kota});
//         console.log(this.state.city);
//       })
//       .catch((err) => console.log(err));
//   }

//   render() {
//     return (
//       <View>
//         {this.state.city == null ? (
//           <ActivityIndicator size="large" />
//         ) : (
//           <>
//             {this.state.city.map((value, index) => (
//               <View key={index}>
//                 <Text> {value.nama} </Text>
//               </View>
//             ))}
//           </>
//         )}
//       </View>
//     );
//   }
// }
