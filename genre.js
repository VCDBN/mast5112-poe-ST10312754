import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, Button } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';

const GenreScreen = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [searchResults, setSearchResults] = useState([]);
  const genres = ['All', 'Mystery', 'Romance', 'Science Fiction', 'Fantasy', 'Thriller', 'Non-Fiction', 'Biography'];

  const searchBooksByGenre = () => {
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search by Genre</Text>
      <View style={styles.genreSelector}>
        {genres.map((genre) => (
          <Button
            key={genre}
            title={genre}
            onPress={() => {
              setSelectedGenre(genre);
              searchBooksByGenre();
            }}
          />
        ))}
      </View>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>Author: {item.author}</ListItem.Subtitle>
              <ListItem.Subtitle>Pages: {item.pages}</ListItem.Subtitle>
              <Button title="Read" onPress={() => addToHistory(item)} />
            </ListItem.Content>
          </ListItem>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  genreSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});

export default GenreScreen;
