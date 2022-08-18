---
id: router-provider
title: Router Provider
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**refine** needs some router functions to create resource pages, navigate, etc. This provider allows you to use the router library you want.

A router provider must include the following methods:

```tsx
const routerProvider = {
    useHistory: () => {
        push: (...args) => any,
        replace: (...args) => any,
        goBack: (...args) => any,
    },
    useLocation: () => {
        pathname: string,
        search: string,
    },
    useParams: <Params extends { [K in keyof Params]?: string } = {}>() => Params,
    Prompt: React.FC<PromptProps*>,
    Link: React.FC<any>,
    RouterComponent?: React.FC<any>,
};
```

> `*`: Too see &#8594 [`<PromptProps>`](/core/interfaces.md#promptprops)

:::info

**refine** includes many out-of-the-box router providers to use in your projects like

-   [React Router V6][react-router-v6]
-   [React Router V5][react-router-v5]
-   [React Location][react-location]
-   [Next.js Router][nextjs-router]
-   [Remix Router][remix-router]

:::

:::tip

We do not recommend creating this provider unless you do not need any customization on the router. Instead, you can use [Next.js Router][nextjs-router] for your [Next.js](https://nextjs.org/) app and [React Router V6][react-router-v6], [React Router V5][react-router-v5] or [React Location][react-location] for your [react](https://en.reactjs.org/) app.

:::

## Usage

To activate router provider in **refine**, we have to pass the `routerProvider` to the `<Refine />` component.

<Tabs
defaultValue="react-router-v6"
values={[
{label: 'React Router V6', value: 'react-router-v6'},
{label: 'React Router V5', value: 'react-router'},
{label: 'React Location', value: 'react-location'},
{label: 'Next.js Router', value: 'nextjs'},
{label: 'Remix Router', value: 'remix'}
]}>
<TabItem value="react-router-v6">

```tsx title="App.tsx"
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";

const App: React.FC = () => {
    return <Refine routerProvider={routerProvider} />;
};
```

</TabItem>
<TabItem value="react-router">

```tsx title="App.tsx"
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v5";

const App: React.FC = () => {
    return <Refine routerProvider={routerProvider} />;
};
```

</TabItem>
<TabItem value="react-location">

```tsx title="App.tsx"
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-location";

const App: React.FC = () => {
    return <Refine routerProvider={routerProvider} />;
};
```

</TabItem>
<TabItem value="nextjs">

```tsx title="pages/_app.tsx"
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-nextjs-router";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Refine routerProvider={routerProvider}>
            <Component {...pageProps} />
        </Refine>
    );
}
```

  </TabItem>
<TabItem value="remix">

```tsx title="app/root.tsx"
import type { MetaFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-remix-router";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "New Remix + Refine App",
    viewport: "width=device-width,initial-scale=1",
});

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Refine
                    routerProvider={routerProvider}
                >
                    <Outlet />
                </Refine>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
```

</TabItem>
</Tabs>

## Creating a router provider

The `routerProvider` methods **refine** expects are exactly the same as [React Router V6](https://reactrouter.com) methods.

To understand how to create a `routerProvider`, let's examine how the [React Router V6][react-router-v6], [React Router V5][react-router-v5], [React Location][react-location] and [Next.js Router][nextjs-router] libraries provided by **refine** create a `routerProvider`.

### `useHistory`

**refine** uses `push`, `replace`, and `goBack` functions of `useHistory` for navigation.

<Tabs
defaultValue="react-useHistory-v6"
values={[
{label: 'React Router V6', value: 'react-useHistory-v6'},
{label: 'React Router V5', value: 'react-useHistory'},
{label: 'React Location', value: 'react-location-useHistory'},
{label: 'Next.js Router', value: 'nextjs-useHistory'},
{label: 'Remix Router', value: 'remix-useHistory'},
]}>
<TabItem value="react-useHistory-v6">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";

const routerProvider: IRouterProvider = {
    ...
// highlight-start
    useHistory: () => {
        const navigate = useNavigate();

        return {
            push: navigate,
            replace: (path: string) => {
                navigate(path, { replace: true });
            },
            goBack: () => {
                navigate(-1);
            },
        };
    },
// highlight-end

    ...
};
```

</TabItem>
<TabItem value="react-useHistory">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-next-line
import { useHistory } from "react-router-dom";

const routerProvider: IRouterProvider = {
    ...
// highlight-next-line
    useHistory,
    ...
};
```

</TabItem>
<TabItem value="react-location-useHistory">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-next-line
import { useHistory, useLocation } from "react-location";

const routerProvider: IRouterProvider = {
    ...
    // highlight-start
    useHistory: () => {
        const navigate = useNavigate();
        const location = useLocation();

        return {
            push: (path: string) => {
                navigate({
                    to: path,
                });
            },
            replace: (path: string) => {
                navigate({
                    to: path,
                    replace: true,
                });
            },
            goBack: () => {
                location.history.back();
            },
        };
    },
    // highlight-end
    ...
};
```

</TabItem>
<TabItem value="nextjs-useHistory">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-next-line
import { useRouter } from "next/router";

const routerProvider: IRouterProvider = {
    ...
// highlight-start
    useHistory: () => {
        const router = useRouter();
        const { push, replace, back } = router;
        return {
            push,
            replace,
            goBack: back,
        };
    },
// highlight-end
    ...
};
```

  </TabItem>
<TabItem value="remix-useHistory">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-next-line
import { useNavigate } from "@remix-run/react";

const routerProvider: IRouterProvider = {
    ...
// highlight-start
    useHistory: () => {
        const navigate = useNavigate();

        return {
            push: navigate,
            replace: (path: string) => {
                navigate(path, { replace: true });
            },
            goBack: () => {
                navigate(-1);
            },
        };
    },
// highlight-end
    ...
};
```

  </TabItem>
</Tabs>

### `useLocation`

**refine** uses the `pathname` to find the location of the user and `search` to find the query string.

<Tabs
defaultValue="react-useLocation-v6"
values={[
{label: 'React Router V6', value: 'react-useLocation-v6'},
{label: 'React Router V5', value: 'react-useLocation'},
{label: 'React Location', value: 'react-location-useLocation'},
{label: 'Next.js Router', value: 'nextjs-useLocation'},
{label: 'Remix Router', value: 'remix-useLocation'}
]}>
<TabItem value="react-useLocation-v6">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-next-line
import { useLocation } from "react-router-dom";

const routerProvider: IRouterProvider = {
    ...
// highlight-next-line
    useLocation,
    ...
};
```

</TabItem>
<TabItem value="react-useLocation">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-next-line
import { useLocation } from "react-router-dom";

const routerProvider: IRouterProvider = {
    ...
// highlight-next-line
    useLocation,
    ...
};
```

</TabItem>
<TabItem value="react-location-useLocation">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-next-line
import { useLocation } from "react-location";

const routerProvider: IRouterProvider = {
    ...
// highlight-start
    useLocation: () => {
        const location = useLocation();
        return {
            pathname: location.current.pathname,
            search: location.current.searchStr,
        };
    },
// highlight-end
    ...
};
```

</TabItem>
<TabItem value="nextjs-useLocation">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-start
import { useRouter } from "next/router";
import qs from "qs";
// highlight-end

const routerProvider: IRouterProvider = {
    ...
// highlight-start
    useLocation: () => {
        const router = useRouter();
        const { pathname, query } = router;

        const queryParams = qs.stringify(query);

        return {
            pathname,
            search: queryParams && `?${queryParams}`,
        };
    },
// highlight-end
    ...
};
```

</TabItem>
<TabItem value="remix-useLocation">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-start
import { useLocation } from "@remix-run/react";
// highlight-end

const routerProvider: IRouterProvider = {
    ...
// highlight-start
    useLocation: () => {
        const location = useLocation();

        return location;
    },
// highlight-end
    ...
};
```

</TabItem>
</Tabs>

### `useParams`

**refine** uses `useParams` to use action name, record id, etc. found in the route.

<Tabs
defaultValue="react-router-v6-useParams"
values={[
{label: 'React Router V6', value: 'react-router-v6-useParams'},
{label: 'React Router V5', value: 'react-router-v5-useParams'},
{label: 'React Location', value: 'react-location-useParams'},
{label: 'Next.js Router', value: 'nextjs-useParams'},
{label: 'Remix Router', value: 'remix-useParams'}
]}>
<TabItem value="react-router-v6-useParams">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-next-line
import { useParams } from "react-router-dom";

const routerProvider: IRouterProvider = {
    ...
// highlight-next-line
    useParams,
    ...
};
```

</TabItem>
<TabItem value="react-router-v5-useParams">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-next-line
import { useParams } from "react-router-dom";

const routerProvider: IRouterProvider = {
    ...
// highlight-next-line
    useParams,
    ...
};
```

</TabItem>

<TabItem value="react-location-useParams">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-next-line
import { useMatch } from "react-location";

const routerProvider: IRouterProvider = {
    ...
// highlight-start
    useParams: () => {
        const { params } = useMatch();

        return params as any;
    },
// highlight-end
    ...
};
```

</TabItem>

<TabItem value="nextjs-useParams">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-next-line
import { useRouter } from "next/router";

const routerProvider: IRouterProvider = {
    ...
// highlight-start
    useParams: <Params>() => {
        const router = useRouter();

        const { query } = router;
        return query as unknown as Params;
    },
// highlight-end
    ...
};
```

</TabItem>
<TabItem value="remix-useParams">

```ts title="routerProvider.ts"
import { handleUseParams, IRouterProvider } from "@pankod/refine-core";
// highlight-next-line
import { useParams } from "@remix-run/react";

const routerProvider: IRouterProvider = {
    ...
// highlight-start
    useParams: () => {
        const params = useParams();
        return handleUseParams(params);
    },
// highlight-end
    ...
};
```

</TabItem>
</Tabs>

### `Prompt`

**refine** uses `<Prompt>` to display the alert when [warnWhenUnsavedChanges](/core/components/refine-config.md#warnwhenunsavedchanges) is `true`.

<Tabs
defaultValue="react--router-v6-prompt"
values={[
{label: 'React Router V6', value: 'react--router-v6-prompt'},
{label: 'React Router V5', value: 'react--router-v5-prompt'},
{label: 'React Location', value: 'react-location-prompt'},
{label: 'Next.js Router', value: 'nextjs-prompt'},
{label: 'Remix Router', value: 'remix-prompt'}
]}>
<TabItem value="react--router-v6-prompt">

```tsx title="Prompt.tsx"
// highlight-start
import { useEffect, useContext } from "react";
import { UNSAFE_NavigationContext as NavigationContext } from "react-router-dom";
import type { History } from "history";
// highlight-end

import type { PromptProps } from "@pankod/refine-core";

export const Prompt: React.FC<PromptProps> = ({
    message,
    when,
    setWarnWhen,
}) => {
    const navigator = useContext(NavigationContext).navigator as History;

    useEffect(() => {
        if (!when) return;

        const unblock = navigator.block((transition: any) => {
            if (window.confirm(message)) {
                setWarnWhen?.(false);
                unblock();
                transition.retry();
            } else {
                navigator.location.pathname = window.location.pathname;
            }
        });
        return unblock;
    }, [when, location, message]);

    return null;
};
```

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";

// highlight-next-line
import { Prompt } from "./prompt";

const routerProvider: IRouterProvider = {
    ...
// highlight-next-line
    Prompt,
    ...
};
```

</TabItem>
<TabItem value="react--router-v5-prompt">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-next-line
import { Prompt } from "react-router-dom";

const routerProvider: IRouterProvider = {
    ...
// highlight-next-line
    Prompt: Prompt as any,
    ...
};
```

</TabItem>
<TabItem value="react-location-prompt">

```tsx title="Prompt.tsx"
import { useEffect } from "react";
// highlight-next-line
import { useLocation } from "react-location";

import type { PromptProps } from "@pankod/refine-core";

export const Prompt: React.FC<PromptProps> = ({
    message,
    when,
    setWarnWhen,
}) => {
    const location = useLocation();

    useEffect(() => {
        if (!when) return;

        const unblock = location.history.block((transition) => {
            if (window.confirm(message)) {
                setWarnWhen?.(false);
                unblock();
                transition.retry();
            } else {
                location.current.pathname = window.location.pathname;
            }
        });
        return unblock;
    }, [when, location, message]);

    return null;
};
```

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";

// highlight-next-line
import { Prompt } from "./prompt";

const routerProvider: IRouterProvider = {
    ...
// highlight-next-line
    Prompt,
    ...
};
```

</TabItem>
<TabItem value="nextjs-prompt">

```tsx title="prompt.tsx"
import { useRouter } from "next/router";
import { useEffect } from "react";

import type { PromptProps } from "@pankod/refine-core";

export const Prompt: React.FC<PromptProps> = ({
    message,
    when,
    setWarnWhen,
}) => {
    const router = useRouter();

    useEffect(() => {
        const routeChangeStart = () => {
            if (when) {
                const allowTransition = window.confirm(message);
                if (allowTransition) {
                    setWarnWhen?.(false);
                } else {
                    router.events.emit("routeChangeError");
                    throw "Abort route change due to unsaved changes prompt. Ignore this error.";
                }
            }
        };
        router.events.on("routeChangeStart", routeChangeStart);

        return () => router.events.off("routeChangeStart", routeChangeStart);
    }, [when]);
    return null;
};
```

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";

// highlight-next-line
import { Prompt } from "./prompt";

const routerProvider: IRouterProvider = {
    ...
// highlight-next-line
    Prompt,
    ...
};
```

</TabItem>
<TabItem value="remix-prompt">

```tsx title="prompt.tsx"
import { useEffect, useContext } from "react";
import { UNSAFE_NavigationContext as NavigationContext } from "react-router-dom";
import type { History } from "history";

import type { PromptProps } from "@pankod/refine-core";

export const Prompt: React.FC<PromptProps> = ({
    message,
    when,
    setWarnWhen,
}) => {
    const navigator = useContext(NavigationContext).navigator as History;

    useEffect(() => {
        if (!when) return;

        const unblock = navigator.block((transition: any) => {
            if (window.confirm(message)) {
                setWarnWhen?.(false);
                unblock();
                transition.retry();
            } else {
                navigator.location.pathname = window.location.pathname;
            }
        });
        return unblock;
    }, [when, message]);

    return null;
};
```

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";

// highlight-next-line
import { Prompt } from "./prompt";

const routerProvider: IRouterProvider = {
    ...
// highlight-next-line
    Prompt,
    ...
};
```

</TabItem>
</Tabs>

### `Link`

**refine** uses `<Link>` for navigation.

<Tabs
defaultValue="react-router-v6-link"
values={[
{label: 'React Router V6', value: 'react-router-v6-link'},
{label: 'React Router V5', value: 'react-router-v5-link'},
{label: 'React Location', value: 'react-location-link'},
{label: 'Next.js Router', value: 'nextjs-link'},
{label: 'Remix Router', value: 'remix-link'}
]}>
<TabItem value="react-router-v6-link">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-next-line
import { Link } from "react-router-dom";

const routerProvider: IRouterProvider = {
    ...
// highlight-next-line
    Link,
    ...
};
```

</TabItem>
<TabItem value="react-router-v5-link">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-next-line
import { Link } from "react-router-dom";

const routerProvider: IRouterProvider = {
    ...
// highlight-next-line
    Link,
    ...
};
```

</TabItem>
<TabItem value="react-location-link">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-next-line
import { Link } from "react-location";

const routerProvider: IRouterProvider = {
    ...
// highlight-next-line
    Link,
    ...
};
```

</TabItem>
<TabItem value="nextjs-link">

```tsx title="RefineLink.tsx"
import React from "react";
import Link, { LinkProps } from "next/link";

type MakeOptional<Type, Key extends keyof Type> = Omit<Type, Key> &
    Partial<Pick<Type, Key>>;

type RefineLinkProps =
    | (MakeOptional<LinkProps, "href"> & {
          to: LinkProps["href"];
      })
    | LinkProps;

export const RefineLink: React.FC<RefineLinkProps> = ({
    children,
    ...props
}) => (
    <Link
        href={"to" in props ? props.to : props.href}
        legacyBehavior={false}
        {...props}
    >
        {children}
    </Link>
);
```

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";

// highlight-start
import { RefineLink } from "./refineLink";

const routerProvider: IRouterProvider = {
    ...
    // highlight-next-line
    Link: RefineLink,
    ...
};
```

:::info

We use `<WrapperLink>` instead of using `<Link>` directly because **refine** uses `<Link>` component with `to` prop in its packages. So `<WrapperLink>` maps `to` to `href` prop.

`@pankod/refine-nextjs-router` uses `<Link/>` component with `legacyBehavior` prop set to `false` by default to comply with the new `<Link/>` behavior of Next.js which is currently under `experimental` flag but soon to be the default behavior with Next.js 13.

[To learn more about the changing behavior of `<Link/>` check out this PR](https://github.com/vercel/next.js/pull/36436)

:::

  </TabItem>

<TabItem value="remix-link">

```ts title="routerProvider.ts"
import { IRouterProvider } from "@pankod/refine-core";
// highlight-next-line
import { Link } from "@remix-run/react";

const routerProvider: IRouterProvider = {
    ...
// highlight-next-line
    Link,
    ...
};
```

</TabItem>
</Tabs>

### `routes`

`routes` allow us to create custom pages in your **react** apps that have different paths than those defined by `resources`.

[Refer to the Custom Pages documentation for detailed information. &#8594](guides-and-concepts/custom-pages.md)

:::info

Since **Nextjs** and **Remix** has a file system based router built on the page concept, you can create your custom pages under the pages folder you don't need `routes` property.

:::

### `RouterComponent`

It creates the navigation routes of the **refine** app and determines how the components will be rendered on which paths.

In general, we can list what it does as follows:

-   It creates create, edit, list, show pages with paths according to the resources' own name.
-   Allows rendering of custom [`routes`](#routes) passed to `routerProviders` as properties.
-   Different routes render when the user is authenticated and not.

:::info
`RouterComponent` is required for **refine** React apps but not required for Next.js and Remix apps.

Since Next.js and Remix has a folder base route structure, it is used by exporting the `<NextRouteComponent>` or `<RemixRouteComponent>` from the created page.
:::

<br />

&#8594 [Refer to the React Router V6's `<RouterComponent>` for detailed usage information.][routercomponent-v6]  
&#8594 [Refer to the React Router V5's `<RouterComponent>` for detailed usage information.][routercomponent]  
&#8594 [Refer to the React Location's `<RouterComponent>` for detailed usage information.][react-location-routercomponent]  
&#8594 [Refer to the Next.js Router's `<NextRouteComponent>` for detailed usage information.](https://github.com/pankod/refine/blob/master/packages/nextjs-router/src/nextRouteComponent.tsx)
&#8594 [Refer to the Next.js Router's `<RemixRouteComponent>` for detailed usage information.](https://github.com/pankod/refine/blob/master/packages/remix/src/routeComponent.tsx)

## Serving the application from a subdirectory

<Tabs
defaultValue="react-router-v6-subdirectory"
values={[
{label: 'React Router V6', value: 'react-router-v6-subdirectory'},
{label: 'React Router V5', value: 'react-router-v5-subdirectory'},
{label: 'React Location', value: 'react-location-subdirectory'},
{label: 'Next.js', value: 'nextjs-subdirectory'}
]}>
<TabItem value="react-router-v6-subdirectory">

If you want to serve from a subdirectory in your **refine** react app. You can use `basepath` property of [`<Router>`][browserrouter].

The [`<RouterComponent>`][routercomponent] in the [react-router-v6][react-router-v6] package passes all its properties to the [`<BrowserRouter>`][browserrouter] component. Therefore, a `<BrowserRouter>` property that we will give to the `<RouterComponent>` is passed to the `<BrowserRouter>` that wraps our application.

In the example below you can see how to serve the application in a subdirectory.

```tsx title="src/App.tsx"
import { Refine } from "@pankod/refine-core";
// highlight-next-line
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import "@pankod/refine/dist/styles.min.css";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";

const API_URL = "https://api.fake-rest.refine.dev";

const { RouterComponent } = routerProvider;

// highlight-next-line
const CustomRouterComponent = () => <RouterComponent basename="/admin" />;

const App: React.FC = () => {
    return (
        <Refine
            // highlight-start
            routerProvider={{
                ...routerProvider,
                RouterComponent: CustomRouterComponent,
            }}
            // highlight-end
            dataProvider={dataProvider(API_URL)}
            resources={[
                {
                    name: "posts",
                    list: PostList,
                    create: PostCreate,
                    edit: PostEdit,
                    show: PostShow,
                },
            ]}
        />
    );
};

export default App;
```

Now you can access our application at `www.domain.com/admin`.

</TabItem>
<TabItem value="react-router-v5-subdirectory">

If you want to serve from a subdirectory in your **refine** react app. You can use `basepath` property of [`<Router>`][browserrouter].

The [`<RouterComponent>`][routercomponent] in the [react-router-v5][react-router-v5] package passes all its properties to the [`<BrowserRouter>`][browserrouter] component. Therefore, a `<BrowserRouter>` property that we will give to the `<RouterComponent>` is passed to the `<BrowserRouter>` that wraps our application.

In the example below you can see how to serve the application in a subdirectory.

```tsx title="src/App.tsx"
import { Refine } from "@pankod/refine-core";
// highlight-next-line
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import "@pankod/refine/dist/styles.min.css";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";

const API_URL = "https://api.fake-rest.refine.dev";

const { RouterComponent } = routerProvider;

// highlight-next-line
const CustomRouterComponent = () => <RouterComponent basename="/admin" />;

const App: React.FC = () => {
    return (
        <Refine
            // highlight-start
            routerProvider={{
                ...routerProvider,
                RouterComponent: CustomRouterComponent,
            }}
            // highlight-end
            dataProvider={dataProvider(API_URL)}
            resources={[
                {
                    name: "posts",
                    list: PostList,
                    create: PostCreate,
                    edit: PostEdit,
                    show: PostShow,
                },
            ]}
        />
    );
};

export default App;
```

Now you can access our application at `www.domain.com/admin`.

</TabItem>
<TabItem value="react-location-subdirectory">

If you want to serve from a subdirectory in your **refine** react app. You can use `basename` property of [`<Router>`][router].

The [`<RouterComponent>`][routercomponent] in the [react-location][react-location] package passes all its properties to the [`<Router>`][router] component. Therefore, a `<Router>` property that we will give to the `<RouterComponent>` is passed to the `<Router>` that wraps our application.

In the example below you can see how to serve the application in a subdirectory.

```tsx title="src/App.tsx"
import { Refine } from "@pankod/refine-core";
// highlight-next-line
import routerProvider from "@pankod/refine-react-location";
import dataProvider from "@pankod/refine-simple-rest";
import "@pankod/refine/dist/styles.min.css";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";

const API_URL = "https://api.fake-rest.refine.dev";

const { RouterComponent, location } = routerProvider;

// highlight-start
const CustomRouterComponent = () => (
    <RouterComponent location={location} basepath="/admin" />
);
// highlight-end

const App: React.FC = () => {
    return (
        <Refine
            // highlight-start
            routerProvider={{
                ...routerProvider,
                RouterComponent: CustomRouterComponent,
            }}
            // highlight-end
            dataProvider={dataProvider(API_URL)}
            resources={[
                {
                    name: "posts",
                    list: PostList,
                    create: PostCreate,
                    edit: PostEdit,
                    show: PostShow,
                },
            ]}
        />
    );
};

export default App;
```

Now you can access our application at `www.domain.com/admin`.

  </TabItem>
    <TabItem value="nextjs-subdirectory">

To serve your application from a subdirectory in your **refine** Nextjs application, simply add `basePath` to your `next.config.js` file.

```ts
module.exports = {
    basePath: "/admin",
};
```

[Refer to the `Nextjs` documentation for detailed usage information. &#8594](https://nextjs.org/docs/api-reference/next.config.js/basepath)

Now you can access our application at `www.domain.com/admin`.

  </TabItem>
</Tabs>

[browserrouter]: https://github.com/pankod/refine/blob/master/packages/react-router-v6/src/routerComponent.tsx
[router]: https://react-location.tanstack.com/docs/api#router
[routercomponent-v6]: https://github.com/pankod/refine/blob/master/packages/react-router-v6/src/routerComponent.tsx
[routercomponent]: https://github.com/pankod/refine/blob/master/packages/react-router/src/routerComponent.tsx
[react-location-routercomponent]: https://github.com/pankod/refine/blob/master/packages/react-location/src/routerComponent.tsx
[react-router-v5]: https://github.com/pankod/refine/tree/master/packages/react-router
[react-router-v6]: https://github.com/pankod/refine/tree/master/packages/react-router-v6
[nextjs-router]: https://github.com/pankod/refine/tree/master/packages/nextjs-router
[react-location]: https://github.com/pankod/refine/tree/master/packages/react-location
[remix-router]: https://github.com/pankod/refine/tree/master/packages/remix
