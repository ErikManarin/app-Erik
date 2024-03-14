import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.testDb'); // Abre uma base de dados chamada "testDb"

export default function SQLiteScreen() {
  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, value text);",
        [],
        () => { console.log('Tabela criada com sucesso'); },
        error => { console.log('Erro ao criar tabela: ' + error.message); }
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Bem-vindo ao seu app Expo com SQLite!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 