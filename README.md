# rbxts-react-browser

## Usage

```JSX
import { MyComponent } from '@rbxroot/src/StarterPlayer/StarterPlayerScripts/Gui/components/MyComponent'

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
yarn upgrade @rbxroot/src
```

## Setup

### Create `webapp` in subdirectory of Rojo root

```console
cd MyGame
yarn create next-app
```

### Update MyGame/tsconfig.json

- Add `"exclude": ["webapp"]` to top level

### Create MyGame/src/project.json

```json
{
  "name": "@rbxroot/src",
  "version": "1.0.0",
  "description": "Dummy package to allow file:../src dependency in ./webapp"
}
```

### Update MyGame/webapp/package.json

- Add dependencies:

```json
"@rbxroot/src": "file:../src",
"@rbxts/react": "git+https://github.com/GreenAppers/rbxts-react-browser.git",
```

### Update MyGame/webapp/tscconfig.json

- Add `"jsxImportSource": "@rbxts/react"` to `compilerOptions`
- Add `"node_modules/@rbxts/react/dist/index.d.ts"` to `include`

### Update MyGame/webapp/next.config.mjs

- Add `transpilePackages: ['@rbxroot/src']` to `nextConfig`
- Done!
