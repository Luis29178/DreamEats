import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

type propTypes = {
  style: {};
};

const News = ({ style }: propTypes) => {
  return (
    <View style={style}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
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
              <Text style={styles.eventDescription}>
                {` The year is 2054 and Earth is now uninhabitable. The human species has caused so much damage to the planet’s core it’s slowly deteriorating, and scientists have recently discovered that a huge asteroid is heading directly toward Earth.

  Come with us as we take you on a journey to explore the universe and look for a new planet. What danger awaits us? What is lurking in the great beyond? Is there life on another planet? On our quest, we will be fashionable as space becomes our new runway all the while trying to ensure the survival of our species. There are so many questions that need to be answered. Will we find a new Earth? Are there aliens on this planet? Or are we now the aliens?`}
              </Text>

              <Link href={"./"} asChild>
                <TouchableOpacity style={styles.infoButton}>
                  <Text style={styles.btnText}>Learn More About Events</Text>
                  <LinearGradient
                    colors={["transparent", `${Colors.lavenderBlue}21`]}
                    start={{ x: 0.5, y: 0.35 }}
                    end={{ x: 0.5, y: 1 }}
                    style={styles.innerShadow}
                  />
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
        <View style={styles.additionalNews}>


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
    marginVertical: 10,
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
  },

  eventDescription: {
    fontSize: 16,
    fontFamily: Fonts.body,
    color: Colors.heavyGray,
    marginBottom: 10,
  },

  infoButton: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,

    elevation: 2,

    borderColor: Colors.primary,
    borderRadius: 9001,
  },

  btnText: {
    color: Colors.primary,
    fontFamily: Fonts.button,
    fontSize: 16,
  },
  innerShadow: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 9001,
  },
  additionalNews: {
    height: 300,
    width: "100%"
  },
});
