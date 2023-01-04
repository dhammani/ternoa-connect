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
  accountInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    whiteSpace: 'nowrap' as const,
  },
  accountName: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '900',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  extensionLogo: {
    height: 16,
    width: 16,
  },
}
