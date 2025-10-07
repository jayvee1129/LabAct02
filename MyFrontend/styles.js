import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },

  headerText: {
    fontSize: 50,
    fontStyle: "italic",
    fontWeight: "700",
    color: "#f58766ff",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 40,
  },

  button: {
    width: "20%",
    backgroundColor: "#2d97eeff",
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 18,
  },

  input: {
    width: "25%",
    height: 50,
    borderColor: "#1a1919ff",
    borderWidth: 2,
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#f58766ff",
  },

  subheading: {
    fontSize: 24,
    fontWeight: "600",
    color: "#34495e",
    marginBottom: 10,
  },

  infoContainer: {
    width: "25%",
    backgroundColor: "#f58766ff",
    padding: 20,
    borderColor: "#1a1919ff",
    borderWidth: 2,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    marginBottom: 20,
  },

  infoText: {
    fontSize: 20,
    fontStyle: "italic",
    color: "#050505ff",
    marginBottom: 10,
  },

  buttonWrapper: {
    width: "5%",
    backgroundColor: "#2d97eeff",
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  userContainer: {
    backgroundColor: "#f58766ff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  userInfo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
  },

  userTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
    marginTop: 10,
    textAlign: "center",
  },
});

export default Styles;
