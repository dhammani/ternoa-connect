export default {
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#3817B8',
    borderRadius: 8,
    color: '#FFF',
    padding: 8,
    margin: 8,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  extensionInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    whiteSpace: 'nowrap' as const,
  },
  logo: {
    height: 32,
    width: 32,
  },
  extensionName: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '900',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  download: {
    padding: '2px 8px',
    backgroundColor: 'blue',
    borderRadius: 8,
  },
  disabled: {
    padding: '2px 8px',
    backgroundColor: 'red',
    borderRadius: 8,
  },
}
