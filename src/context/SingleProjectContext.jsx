import { useState, createContext } from 'react';
import projectsData from '../data/projectsData.json'
import { useParams } from 'react-router-dom'

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const { id } = useParams()

	const project = projectsData.find(
		project => project.id === parseInt(id)
	)

	const [singleProjectData, setSingleProjectData] = useState(project || null);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	)
}

export default SingleProjectContext;