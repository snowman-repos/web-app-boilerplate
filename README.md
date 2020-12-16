# My Web App Boilerplate

A customized setup for a [RedwoodJS](https://redwoodjs.com/tutorial/welcome-to-redwood) (♥️) app with a Material UI theme and authentication built in.
- Public landing page with hero component
- Private dashboard page with an app bar and slide-in sidebar navigation menu.
### Features

- Opinionated defaults for formatting, file organization, webpack, Babel, and more.
- Simple but powerful routing (all routes defined in one file) with dynamic (typed) parameters, constraints, and named route - functions (to generate correct URLs).
- Automatic page-based code-splitting.
- Boilerplate-less GraphQL API construction.
- Cells: a declarative way to fetch data from the backend API.
- Generators for pages, layouts, cells, SDL, services, etc.
- Scaffold generator for CRUD operations around a specific DB table.
- Forms with easy client- and/or server-side validation and error - handling.
- [Hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/) (HMR) for faster development.
- Database migrations (via Prisma 2).
- First class JAMstack-style deployment to Netlify.
- Authentication with Netlify Identity
- Material UI

### Prerequisites

- node: ">=12"
- yarn: ">=1.15"
### Setup

I use Yarn as my package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.

### Handy CLI commands

| Command | Description |
|---|---|
| `yarn rw g auth <provider>` | Generate an auth configuration |
| `yarn rw g cell <name>` | Generate a cell component |
| `yarn rw g component <name>` | Generate a component component |
| `yarn rw g dataMigration <name>` | Generate a data migration component |
| `yarn rw g deploy <provider>` | Generate a deployment configuration |
| `yarn rw g function <name>` | Generate a Function |
| `yarn rw g layout <name>` | Generate a layout component |
| `yarn rw g page <name> [path]	Generate a page component |
| `yarn rw g scaffold <model>` | Generate Pages, SDL, and Services files based | `yarn rw g on a given DB schema Model. Also accepts <path/model> |
| `yarn rw g sdl <model>` | Generate a GraphQL schema and service object |
| `yarn rw g service <name>` | Generate a service component |
| `yarn rw g util <util>` | Quality of life utilities |


### Deploy

* Follow the [RedwoodJS Deployment instructions](https://redwoodjs.com/tutorial/deployment)
### More info

- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.
