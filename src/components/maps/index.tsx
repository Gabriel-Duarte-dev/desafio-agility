import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useContext, useState } from "react";
import MainContext, { StoreDTO } from "../../context";
import { useStore } from "../../hooks/useStore";

import balonDollar from "../../assets/balon_dollar.svg";

export function Maps(): JSX.Element {
  const { storeList, position } = useContext(MainContext);
  const { biggerAmout } = useStore(storeList);
  console.log(biggerAmout);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCACko9y-roVOqOJ_otTJ3CYX0UVdpb7Dw",
  });

  const center = position;

  const [selectedMarker, setSelectedMarker] = useState<StoreDTO | null>(null);

  return (
    <Box w="calc(100% - 400px)" h="100%">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={5}
          // onLoad={onLoad}
          // onUnmount={onUnmount}
        >
          {storeList.map((store, index) => {
            return (
              <Marker
                key={index}
                position={{ lat: store.lat, lng: store.long }}
                onClick={() => setSelectedMarker(store)}
                icon={
                  biggerAmout == index
                    ? {
                        url: balonDollar,
                        strokeColor: "#00ff00",
                        scaledSize: new window.google.maps.Size(60, 60),
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(15, 15),
                      }
                    : undefined
                }
              />
            );
          })}

          {selectedMarker ? (
            <InfoWindow
              position={{ lat: selectedMarker.lat, lng: selectedMarker.long }}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <Flex direction="column">
                <Heading as="h3" size="md" mb={2}>
                  {selectedMarker.storeName}
                </Heading>
                <Box>
                  <Text as="p" mb={2}>
                    Cidade: {selectedMarker.city}
                  </Text>
                  <Text as="p">
                    Montante: R${selectedMarker.amount.toFixed(2)}
                  </Text>
                </Box>
              </Flex>
            </InfoWindow>
          ) : (
            false
          )}
        </GoogleMap>
      ) : (
        <></>
      )}
    </Box>
  );
}
