import axios from 'axios'

//const baseUrl = 'http://localhost:3005/notes'


const useResource = baseUrl => {
  const [resources, setResources] = useState([])

  useEffect(() => {
    getAll();
  }, [])

  const getAll = async () => {
    const response = await axios.get(baseUrl);
    setResources([...response.data]);
  }

  const create = async resource => {
    const response = await axios.post(baseUrl, resource);
    setResources([...resources, response.data]);
  }

  const service = {
    create
  }

  return [resources, service]
}

