import { AppBar, Layout } from "react-admin";

const MyAppBar = () => <AppBar color="secondary" position="sticky" />;

export const MyLayout = (props: any) => <Layout {...props} appBar={MyAppBar} />;
