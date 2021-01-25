import React, {Component} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';

export default class Prayer extends Component {
  constructor() {
    super();
    this.state = {
      ip: '',
      date: '',
      jadwal: '',
      time: '',
      coords: '',
      location: '',
      city: [],
      city_id: '',
    };
  }

  componentDidMount() {
    this.getIp();
  }

  getIp() {
    console.log('mengambil ip..');
    fetch('https://api.ipify.org?format=json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({ip: responseJSON.ip});
        console.log(this.state.ip);
        this.getDate();
      })
      .catch((err) => console.log(err));
  }

  getDate() {
    console.log('mengambil tanggal..');
    fetch(`https://time.siswadi.com`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({date: responseJSON.data.date});
        console.log(this.state.date);
        this.getSchedule();
      })
      .catch((err) => console.log(err));
  }

  getSchedule() {
    console.log('mengambil jadwal..');
    this.setState({jadwal: ''});
    fetch(
      `http://api.pray.zone/v2/times/day.json?ip=${this.state.ip}&date=${this.state.date}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({jadwal: responseJSON.results.datetime[0].times});
        console.log(this.state.jadwal);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../../../assets/imgJadwalSholat.png')}
          style={styles.bg}
          blurRadius={3}>
          <ScrollView>
            <View style={{padding: 10, flex: 1}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableNativeFeedback>
                  <Image
                    source={require('../../../assets/menu-button.png')}
                    style={styles.imgOption}
                  />
                </TouchableNativeFeedback>
                <View style={styles.viewContentHeader}>
                  <Text style={styles.textName}>Dzuhur</Text>
                  {this.state.jadwal == '' ? (
                    <>
                      <Text style={styles.textTime}>--:--</Text>
                      <Text style={styles.textRemain}>
                        Selanjutnya Ashar --:--
                      </Text>
                    </>
                  ) : (
                    <>
                      <Text style={styles.textTime}>
                        {this.state.jadwal.Dhuhr}
                      </Text>
                      <Text style={styles.textRemain}>
                        Selanjutnya Ashar {this.state.jadwal.Ashar}
                      </Text>
                    </>
                  )}
                </View>
                <TouchableNativeFeedback>
                  <Image
                    source={require('../../../assets/settings-cogwheel-button.png')}
                    style={styles.imgOption}
                  />
                </TouchableNativeFeedback>
              </View>
              <View style={{margin: 5}}></View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{...styles.viewLocation, flex: 1, marginRight: 10}}>
                  <Image
                    source={require('../../../assets/map-placeholder.png')}
                    style={styles.imgMap}
                  />
                  <Text style={styles.textLocation} numberOfLines={1}>
                    Soreang, Bandung Soreang, Bandung Soreang, Bandung Soreang,
                    Bandung Soreang, Bandung Soreang, Bandung Soreang, Bandung
                    Soreang, Bandung
                  </Text>
                </View>
                <TouchableNativeFeedback onPress={() => this.getIp()}>
                  <View style={styles.viewLocation}>
                    <Image
                      source={require('../../../assets/refresh-button.png')}
                      style={styles.imgRefresh}
                    />
                  </View>
                </TouchableNativeFeedback>
              </View>
              <View style={{margin: 5}}></View>
              <View style={styles.viewSchedule}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../../../assets/Calendar-Download-PNG.png')}
                    style={styles.imgDate}
                  />
                  <View style={{marginHorizontal: 10}}>
                    <Text style={styles.textDate}>Hari Ini / Jum'at</Text>
                    {this.state.date == '' ? (
                      <Text style={styles.textSubDate}>0000-00-00</Text>
                    ) : (
                      <Text style={styles.textSubDate}>{this.state.date}</Text>
                    )}
                  </View>
                  <Image
                    source={require('../../../assets/Calendar-Download-PNG.png')}
                    style={styles.imgDate}
                  />
                </View>
              </View>
              <View style={{margin: 5}}></View>
              <View
                style={{...styles.viewSchedule, width: '100%', padding: 15}}>
                {this.state.jadwal == '' ? (
                  <ActivityIndicator size="large" color="green" />
                ) : (
                  <>
                    <View style={styles.viewJadwal}>
                      <Text style={styles.textJadwal}>Imsak</Text>
                      <Text style={styles.textJadwal}>
                        {this.state.jadwal.Imsak}
                      </Text>
                    </View>
                    <View style={styles.viewJadwal}>
                      <Text style={styles.textJadwal}>Shubuh</Text>
                      <Text style={styles.textJadwal}>
                        {this.state.jadwal.Fajr}
                      </Text>
                    </View>
                    <View style={styles.viewJadwal}>
                      <Text style={styles.textJadwal}>Terbit</Text>
                      <Text style={styles.textJadwal}>
                        {this.state.jadwal.Sunrise}
                      </Text>
                    </View>
                    <View style={styles.viewJadwal}>
                      <Text style={styles.textJadwal}>Dzuhur</Text>
                      <Text style={styles.textJadwal}>
                        {this.state.jadwal.Dhuhr}
                      </Text>
                    </View>
                    <View style={styles.viewJadwal}>
                      <Text style={styles.textJadwal}>Ashar</Text>
                      <Text style={styles.textJadwal}>
                        {this.state.jadwal.Asr}
                      </Text>
                    </View>
                    <View style={styles.viewJadwal}>
                      <Text style={styles.textJadwal}>Maghrib</Text>
                      <Text style={styles.textJadwal}>
                        {this.state.jadwal.Maghrib}
                      </Text>
                    </View>
                    <View style={styles.viewJadwal}>
                      <Text style={styles.textJadwal}>Isya</Text>
                      <Text style={styles.textJadwal}>
                        {this.state.jadwal.Isha}
                      </Text>
                    </View>
                  </>
                )}
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
  },
  viewContentHeader: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    alignSelf: 'center',
  },
  textName: {
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 5,
    textAlign: 'center',
  },
  textTime: {
    fontSize: 50,
    color: 'white',
    includeFontPadding: false,
    fontWeight: 'bold',
  },
  textRemain: {
    borderTopColor: 'white',
    borderTopWidth: 1,
    color: 'white',
    textAlign: 'center',
    paddingTop: 5,
  },
  viewLocation: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLocation: {
    color: 'white',
    width: '80%',
  },
  imgMap: {
    width: 30,
    height: 30,
    tintColor: 'white',
    marginRight: 15,
  },
  imgRefresh: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  textDate: {
    color: 'white',
    fontSize: 20,
    includeFontPadding: false,
  },
  textSubDate: {
    color: 'grey',
  },
  imgDate: {
    width: 25,
    height: 25,
    tintColor: 'white',
    marginHorizontal: 10,
  },
  viewSchedule: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    alignSelf: 'center',
  },
  imgOption: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  viewJadwal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginVertical: 5,
    paddingBottom: 5,
  },
  textJadwal: {
    fontSize: 20,
    color: 'white',
    includeFontPadding: false,
  },
});
