import {
    ActivityIndicator,
    Pressable,
    StyleSheet,
    TextInput,
} from "react-native";
import React, { useEffect } from "react";
import Entries from "./entries";
import { ScrollView } from "react-native-gesture-handler";
import { faker } from "@faker-js/faker";
import { Text, View } from "../Themed";
import { Button, Skeleton } from "@rneui/base";

type DiaryProps = {
    title: string;
    brief: string;
    image: string;
    date: any;
};

export default function Diary() {
    const [data, setData] = React.useState<DiaryProps[]>();
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        const createFakeData = (): DiaryProps => {
            return {
                title: faker.lorem.words(3),
                brief: faker.lorem.words(10),
                image: faker.image.url(),
                date:
                    faker.date.anytime().getDay() +
                    "." +
                    faker.date.anytime().getMonth() +
                    "." +
                    faker.date.anytime().getFullYear(),
            };
        };
        const fakeDataArray = Array.from({ length: 50 }).map((_) =>
            createFakeData()
        );

        setData(fakeDataArray);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.view}>
            <ScrollView>
                {data?.map((data, i) => (
                    <Entries
                        key={i}
                        title={data.title}
                        brief={data.brief}
                        image={data.image}
                        date={data.date}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        paddingHorizontal: 20,
    },
});
