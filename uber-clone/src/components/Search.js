import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TextInput, StyleSheet, View } from 'react-native';

const Search = () => {
  return (
    // <GooglePlacesAutocomplete
    //   placeholder="Para Onde?"
    //   placeholderTextColor="#333"
    //   onPress={() => {}}
    //   query={{
    //     key: '',
    //     language: 'pt',
    //   }}
    //   textInputProps={{
    //     autoCapitalize: 'none',
    //     autoCorrect: false,
    //   }}
    //   fetchDetails
    //   enablePoweredByContainer={false}
    // />
    <View style={styles.searchForm}>
      <TextInput
        style={styles.searchInput}
        placeholder="Para Onde?"
        placeholderTextColor="#999"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchForm: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
    zIndex: 5,
  },

  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    color:  '#333',
    borderRadius: 5,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },
});

export default Search;
