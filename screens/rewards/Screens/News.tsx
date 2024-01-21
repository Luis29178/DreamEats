import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";

type propTypes = {
  style: {};
};

const News = ({ style }: propTypes) => {
  return (
    <View style={style}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.event}>
          <View style={styles.eventInner}>
            <View style={styles.eventTitleContainer}>
              <Text style={styles.eventTitle}>{`Latest Events`}</Text>
              <Text style={styles.eventSpacer}>{`···`}</Text>
              <Text style={styles.eventName}>{`Drip The Runway`}</Text>
              <Text
                style={styles.eventDate}
              >{`Saturday, July 22 · 7pm EST`}</Text>

              <View style={styles.eventImgContainer}>
                <Image
                style={styles.eventImg}
                  source={require("@/assets/images/dripTheRunway.png")}
                ></Image>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  event: {
    width: "100%",
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderColor: Colors.primary,
  },
  eventInner: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lighterGray,
  },

  eventTitleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  eventTitle: {
    fontSize: 40,
    fontFamily: Fonts.title,
    color: Colors.heavyGray,
    textAlign: "center",
  },
  eventSpacer: {
    fontSize: 36,
    fontFamily: Fonts.title,
    color: Colors.heavyGray,
  },
  eventName: {
    fontSize: 26,
    fontFamily: Fonts.title,
    color: Colors.heavyGray,
  },
  eventDate: {
    fontSize: 12,
    fontFamily: Fonts.title,
    color: Colors.heavyGray,
  },

  eventImgContainer: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    height: 300,
    alignContent: "center",
    justifyContent: "center",


  },
  eventImg: {
    width: "100%",
    height: 300,
    borderRadius: 15,
  }
});
