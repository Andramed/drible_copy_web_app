import { graph, config, auth } from '@grafbase/sdk'

const g = graph.Standalone();



const Project = g.type("Project", {
	title: g.string(),
	descriptions: g.string().optional(),
	image: g.url(),
	liveSiteUrl: g.url().optional(),
	githubUrl: g.url(),
	category: g.string(),
	// createdBy: g.ref(User)
	
})

const User = g.type('User', {
	name: g.string(),
	email: g.string(),
	avatarurl: g.url(),
	description: g.string().optional(),
	githubUrl: g.url().optional(),
	linkedin: g.url().optional(),
	projects: g.ref(Project).list().optional() // Этот код будет добавлен позже
})



export default config({
	graph: g
})


