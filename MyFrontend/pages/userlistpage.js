import { View, Text, Button } from "react-native";
import axios from "axios";
import { FlatList } from "react-native-web";
import { useState, useEffect } from "react";
import Styles from "../styles";

export default function userlistpage({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/registration/api/users/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      <Text style={Styles.userTitle}>Registered Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={Styles.userContainer}>
            <Text style={Styles.userTitle}>Firstname: {item.first_name}</Text>
            <Text style={Styles.userInfo}>Lastname: {item.last_name}</Text>
            <Text style={Styles.userInfo}>email: {item.email}</Text>
            <Text style={Styles.userInfo}>password: {item.password}</Text>
            <Text style={Styles.userInfo}>gender: {item.gender}</Text>
          </View>
        )}
      />
    </View>
  );
}
