import React from "react";
import {
    RefineResetPasswordPageProps,
    RefineResetPasswordFormTypes,
} from "@pankod/refine-ui-types";
import {
    Row,
    Col,
    Layout,
    Card,
    Typography,
    Form,
    Input,
    Button,
    LayoutProps,
    CardProps,
    FormProps,
} from "antd";
import {
    useTranslate,
    useRouterContext,
    useResetPassword,
} from "@pankod/refine-core";

import { layoutStyles, containerStyles, titleStyles } from "../styles";

type ResetPassworProps = RefineResetPasswordPageProps<
    LayoutProps,
    CardProps,
    FormProps
>;

const { Text, Title } = Typography;

/**
 * **refine** has reset password page form which is served on `/reset-password` route when the `authProvider` configuration is provided.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/components/antd-auth-page/#resetpassword} for more details.
 */
export const ResetPasswordPage: React.FC<ResetPassworProps> = ({
    onSubmit,
    loginLink,
    wrapperProps,
    contentProps,
    renderContent,
    formProps,
}) => {
    const [form] = Form.useForm<RefineResetPasswordFormTypes>();
    const translate = useTranslate();
    const { Link } = useRouterContext();

    const { mutate: resetPassword, isLoading } =
        useResetPassword<RefineResetPasswordFormTypes>();

    const CardTitle = (
        <Title level={3} style={titleStyles}>
            {translate("pages.resetPassword.title", "Forgot your password?")}
        </Title>
    );

    const CardContent = (
        <Card
            title={CardTitle}
            headStyle={{ borderBottom: 0 }}
            style={containerStyles}
            {...(contentProps ?? {})}
        >
            <Form<RefineResetPasswordFormTypes>
                layout="vertical"
                form={form}
                onFinish={(values) => (onSubmit ?? resetPassword)(values)}
                requiredMark={false}
                {...formProps}
            >
                <Form.Item
                    name="email"
                    label={translate(
                        "pages.resetPassword.fields.email",
                        "Email",
                    )}
                    rules={[
                        { required: true },
                        {
                            type: "email",
                            message: translate(
                                "pages.resetPassword.errors.validEmail",
                                "Invalid email address",
                            ),
                        },
                    ]}
                >
                    <Input
                        type="email"
                        size="large"
                        placeholder={translate(
                            "pages.resetPassword.fields.email",
                            "Email",
                        )}
                    />
                </Form.Item>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "12px",
                    }}
                >
                    {loginLink ?? (
                        <Text
                            style={{
                                fontSize: 12,
                                marginLeft: "auto",
                            }}
                        >
                            {translate(
                                "pages.register.buttons.haveAccount",
                                "Have an account? ",
                            )}{" "}
                            <Link
                                style={{
                                    fontWeight: "bold",
                                }}
                                to="/login"
                            >
                                {translate("pages.login.signin", "Sign in")}
                            </Link>
                        </Text>
                    )}
                </div>
                <Button
                    type="primary"
                    size="large"
                    htmlType="submit"
                    loading={isLoading}
                    block
                >
                    {translate(
                        "pages.resetPassword.buttons.submit",
                        "Send reset instructions",
                    )}
                </Button>
            </Form>
        </Card>
    );

    return (
        <Layout style={layoutStyles} {...(wrapperProps ?? {})}>
            <Row
                justify="center"
                align="middle"
                style={{
                    height: "100vh",
                }}
            >
                <Col xs={22}>
                    {renderContent ? renderContent(CardContent) : CardContent}
                </Col>
            </Row>
        </Layout>
    );
};
