import { StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import { Text } from "../Themed";
import { Avatar, Button, ListItem } from "@rneui/base";
import {router } from "expo-router";

export default function Entries({
    title,
    brief,
    image,
    date,
}: {
    title: string;
    brief: string;
    image: string;
    date: any;
}) {
    return (
        <ListItem.Swipeable
            Component={TouchableHighlight}
            containerStyle={{}}
            disabledStyle={{ opacity: 0.5 }}
            onLongPress={() => console.log("onLongPress()")}
            onPress={() => 
        router.push("/detailDiary")
      }
            pad={10}
            rightContent={(reset) => (
                <Button
                    title="Delete"
                    onPress={() => reset()}
                    icon={{ name: "delete", color: "white" }}
                    buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
                />
            )}
        >
            <Avatar size="large" rounded source={{ uri: image }} />
            <ListItem.Content>
                <ListItem.Title>
                    <Text style={styles.title}>{title}</Text>
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1}>
                    <Text style={styles.brief} ellipsizeMode="tail">
                        {brief}
                    </Text>
                </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content right>
                <ListItem.Title>
                    <Text>{date}</Text>
                </ListItem.Title>
            </ListItem.Content>
        </ListItem.Swipeable>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    image: {
        width: 80,
        height: 80,
        backgroundColor: "gray",
        borderRadius: 10,
    },

    textContainer: {
        width: "50%",
        marginHorizontal: 10,
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
    },

    brief: {
        fontSize: 16,
        color: "gray",
    },

    date: {
        fontSize: 16,
        color: "gray",
    },
});
