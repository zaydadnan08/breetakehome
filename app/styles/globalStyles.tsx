import { StyleSheet } from 'react-native';


export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  bottomContainer: {
    marginTop: 'auto',
    marginBottom: 20,
  },
  smallText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  mediumText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  largeText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  titleText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#1c1c1c',
    textAlign: 'left',
    marginBottom: 8,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});
