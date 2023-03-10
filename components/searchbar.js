import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';

const SearchBar = ({ setSearchText, searchText }) => {

  const handleSearch = (text) => {
    setSearchText(text);
    console.log(text);
  };

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchBarInput}
        placeholder="Search by ingredients or recipe name..."
        value={searchText}
        onChangeText={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    marginTop: Platform.OS === 'ios' ?  20 : 20,
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 4,
    width: Platform.OS === 'ios' ?  '90%' : '50%'
  },
  searchBarInput: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
});

export default SearchBar;