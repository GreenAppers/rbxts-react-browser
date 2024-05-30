# rbxts-react-browser

## Usage

```JSX
import { MyComponent } from 'StarterPlayer/StarterPlayerScripts/Gui/components/MyComponent'

export default function MyWebPage() {
  return (
    <main className={styles.main}>
      <div className={styles.page}>
        <MyComponent
          BackgroundColor3={Color3.fromRGB(82, 198, 242)}
          BackgroundTransparency={0.5}
          Position={new UDim2(0, 0, 0.8, 0)}
          Size={new UDim2(1, 0, 0.2, 0)}
          Text={'Fly Safe!'}
          TextColor3={Color3.fromRGB(255, 255, 255)}
          TextScaled={true}
          TextSize={14}
        />
      </div>
    </main>
  )
```

### Update imported source

```console
yarn upgrade ReplicatedStorage StarterPlayer
```

## Setup

### Create `webapp` in subdirectory of Rojo root

```console
cd MyGame
yarn create next-app
```

### Update MyGame/tsconfig.json

- Add `"exclude": ["webapp"]` to top level.

### Create MyGame/ReplicatedStorage/project.json

```json
{
  "name": "ReplicatedStorage",
  "version": "1.0.0",
  "description": "Dummy package to allow file:../src/ReplicatedStorage dependency in ./webapp"
}
```

### Create MyGame/StarterPlayer/project.json

```json
{
  "name": "StarterPlayer",
  "version": "1.0.0",
  "description": "Dummy package to allow file:../src/StarterPlayer dependency in ./webapp"
}
```

### Update MyGame/webapp/package.json

- Add dependencies:

```json
"ReplicatedStorage": "file:../src/ReplicatedStorage",
"StarterPlayer": "file:../src/StarterPlayer",
"@rbxts/device": "git+https://github.com/GreenAppers/rbxts-device-browser.git",
"@rbxts/pretty-react-hooks": "git+https://github.com/GreenAppers/rbxts-pretty-react-hooks-browser.git",
"@rbxts/react": "git+https://github.com/GreenAppers/rbxts-react-browser.git",
"@rbxts/ripple": "git+https://github.com/GreenAppers/rbxts-ripple-browser.git",
"@rbxts/services": "git+https://github.com/GreenAppers/rbxts-services-browser.git",
"@rbxts/set-timeout": "git+https://github.com/GreenAppers/rbxts-set-timeout-browser.git",
```

### Update MyGame/webapp/tsconfig.json

- Add `"jsxImportSource": "@rbxts/react",` to `compilerOptions`.
- Add `"node_modules/@rbxts/react/dist/index.d.ts"` to `include`.

### Update MyGame/webapp/next.config.mjs

- Add `transpilePackages: ['ReplicatedStorage', 'StarterPlayer']` to `nextConfig`.
- Done!
