
type Env = 'development' | 'production'

type EnvironmentNode = {
    apiUrl: string
}

type Environment = {
    production: EnvironmentNode,
    development: EnvironmentNode
}

const environment: Environment = {
    production: {
        apiUrl: 'https://daze-api.herokuapp.com/api/'
    },
    development: {
        apiUrl: 'http://127.0.0.1:8080/api/'
    }
};

const env = (process.env.NODE_ENV || 'development') as Env;

export default environment[env];
