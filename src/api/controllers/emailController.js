const ErrorResponse = require('../../utils/ErrorResponse');
const SuccessResponse = require('../../utils/SuccessResponse');
const nodemailer = require('nodemailer');

const sendNodemailerEmail = async (req, res) => {

    const { email } = req.body;
    const subject = "Change your password";
    const baseURL = process.env.FRONTEND_URL;
    const resetPasswordLink = `${baseURL}/change-password/${email}`;
    const htmlContent = `
        <!DOCTYPE html>
            <html
            xmlns:v="urn:schemas-microsoft-com:vml"
            xmlns:o="urn:schemas-microsoft-com:office:office"
            lang="en"
            >
            <head>
                <title></title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <!--[if mso
                ]><xml
                    ><o:OfficeDocumentSettings
                    ><o:PixelsPerInch>96</o:PixelsPerInch
                    ><o:AllowPNG /></o:OfficeDocumentSettings></xml
                ><![endif]-->
                <!--[if !mso]><!-->
                <link
                href="https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;500;600;700;800;900"
                rel="stylesheet"
                type="text/css"
                />
                <link
                href="https://fonts.googleapis.com/css2?family=Oxygen:wght@100;200;300;400;500;600;700;800;900"
                rel="stylesheet"
                type="text/css"
                />
                <!--<![endif]-->
                <style>
                * {
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    padding: 0;
                }

                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: inherit !important;
                }

                #MessageViewBody a {
                    color: inherit;
                    text-decoration: none;
                }

                p {
                    line-height: inherit;
                }

                .desktop_hide,
                .desktop_hide table {
                    mso-hide: all;
                    display: none;
                    max-height: 0px;
                    overflow: hidden;
                }

                .image_block img + div {
                    display: none;
                }

                @media (max-width: 670px) {
                    .desktop_hide table.icons-outer {
                    display: inline-table !important;
                    }

                    .desktop_hide table.icons-inner {
                    display: inline-block !important;
                    }

                    .icons-inner {
                    text-align: center;
                    }

                    .icons-inner td {
                    margin: 0 auto;
                    }

                    .mobile_hide {
                    display: none;
                    }

                    .row-content {
                    width: 100% !important;
                    }

                    .stack .column {
                    width: 100%;
                    display: block;
                    }

                    .mobile_hide {
                    min-height: 0;
                    max-height: 0;
                    max-width: 0;
                    overflow: hidden;
                    font-size: 0px;
                    }

                    .desktop_hide,
                    .desktop_hide table {
                    display: table !important;
                    max-height: none !important;
                    }

                    .row-1 .column-1 .block-4.spacer_block,
                    .row-1 .column-1 .block-9.spacer_block {
                    height: 60px !important;
                    }

                    .row-1 .column-1 .block-5.heading_block h1,
                    .row-1 .column-1 .block-6.heading_block h1 {
                    text-align: center !important;
                    }

                    .row-1 .column-1 .block-5.heading_block h1 {
                    font-size: 45px !important;
                    }

                    .row-1 .column-1 .block-2.image_block td.pad {
                    padding: 0 !important;
                    }

                    .row-1 .column-1 .block-6.heading_block h1 {
                    font-size: 46px !important;
                    }
                }
                </style>
            </head>

            <body
                class="body"
                style="
                margin: 0;
                background-color: #e7c1b7;
                padding: 0;
                -webkit-text-size-adjust: none;
                text-size-adjust: none;
                "
            >
                <table
                class="nl-container"
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                role="presentation"
                style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    background-color: #e7c1b7;
                "
                >
                <tbody>
                    <tr>
                    <td>
                        <table
                        class="row row-1"
                        align="center"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #e7c1b7;
                            background-size: auto;
                        "
                        >
                        <tbody>
                            <tr>
                            <td>
                                <table
                                class="row-content stack"
                                align="center"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8731/bg-b2.jpg');
                                    background-repeat: no-repeat;
                                    background-size: cover;
                                    color: #000000;
                                    width: 650px;
                                    margin: 0 auto;
                                "
                                width="650"
                                >
                                <tbody>
                                    <tr>
                                    <td
                                        class="column column-1"
                                        width="100%"
                                        style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        font-weight: 400;
                                        text-align: left;
                                        vertical-align: top;
                                        border-top: 0px;
                                        border-right: 0px;
                                        border-bottom: 0px;
                                        border-left: 0px;
                                        "
                                    >
                                        <table
                                        class="divider_block block-1"
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                        "
                                        >
                                        <tr>
                                            <td class="pad" style="padding-bottom: 10px">
                                            <div class="alignment" align="center">
                                                <table
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                role="presentation"
                                                width="100%"
                                                style="
                                                    mso-table-lspace: 0pt;
                                                    mso-table-rspace: 0pt;
                                                "
                                                >
                                                <tr>
                                                    <td
                                                    class="divider_inner"
                                                    style="
                                                        font-size: 1px;
                                                        line-height: 1px;
                                                        border-top: 1px solid #303030;
                                                    "
                                                    >
                                                    <span>&#8202;</span>
                                                    </td>
                                                </tr>
                                                </table>
                                            </div>
                                            </td>
                                        </tr>
                                        </table>
                                        <table
                                        class="image_block block-2"
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                        "
                                        >
                                        <tr>
                                            <td
                                            class="pad"
                                            style="
                                                padding-bottom: 20px;
                                                padding-left: 40px;
                                                padding-right: 40px;
                                                padding-top: 20px;
                                                width: 100%;
                                            "
                                            >
                                            <div
                                                class="alignment"
                                                align="center"
                                                style="line-height: 10px"
                                            >
                                                <div style="max-width: 130px">
                                                <a
                                                    href="http://localhost:3000/"
                                                    target="_blank"
                                                    style="outline: none"
                                                    tabindex="-1"
                                                    ><img
                                                    src="https://2763a0692c.imgdist.com/pub/bfra/oak27hbn/qdw/xif/fsp/logo.png"
                                                    style="
                                                        display: block;
                                                        height: auto;
                                                        border: 0;
                                                        width: 100%;
                                                    "
                                                    width="130"
                                                    alt="Your logo"
                                                    title="Your logo"
                                                    height="auto"
                                                /></a>
                                                </div>
                                            </div>
                                            </td>
                                        </tr>
                                        </table>
                                        <table
                                        class="divider_block block-3"
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                        "
                                        >
                                        <tr>
                                            <td class="pad">
                                            <div class="alignment" align="center">
                                                <table
                                                border="0"
                                                cellpadding="0"
                                                cellspacing="0"
                                                role="presentation"
                                                width="100%"
                                                style="
                                                    mso-table-lspace: 0pt;
                                                    mso-table-rspace: 0pt;
                                                "
                                                >
                                                <tr>
                                                    <td
                                                    class="divider_inner"
                                                    style="
                                                        font-size: 1px;
                                                        line-height: 1px;
                                                        border-top: 1px solid #303030;
                                                    "
                                                    >
                                                    <span>&#8202;</span>
                                                    </td>
                                                </tr>
                                                </table>
                                            </div>
                                            </td>
                                        </tr>
                                        </table>
                                        <div
                                        class="spacer_block block-4"
                                        style="
                                            height: 75px;
                                            line-height: 75px;
                                            font-size: 1px;
                                        "
                                        >
                                        &#8202;
                                        </div>
                                        <table
                                        class="heading_block block-5"
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                        "
                                        >
                                        <tr>
                                            <td
                                            class="pad"
                                            style="
                                                padding-left: 40px;
                                                padding-right: 40px;
                                                text-align: center;
                                                width: 100%;
                                            "
                                            >
                                            <h1
                                                style="
                                                margin: 0;
                                                color: #ffffff;
                                                direction: ltr;
                                                font-family: 'Lato', Tahoma, Verdana,
                                                    Segoe, sans-serif;
                                                font-size: 64px;
                                                font-weight: 400;
                                                letter-spacing: normal;
                                                line-height: 120%;
                                                text-align: center;
                                                margin-top: 0;
                                                margin-bottom: 0;
                                                mso-line-height-alt: 76.8px;
                                                "
                                            >
                                                <span class="tinyMce-placeholder"
                                                >Change your<br
                                                /></span>
                                            </h1>
                                            </td>
                                        </tr>
                                        </table>
                                        <table
                                        class="heading_block block-6"
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                        "
                                        >
                                        <tr>
                                            <td
                                            class="pad"
                                            style="
                                                padding-bottom: 10px;
                                                padding-left: 40px;
                                                padding-right: 40px;
                                                text-align: center;
                                                width: 100%;
                                            "
                                            >
                                            <h1
                                                style="
                                                margin: 0;
                                                color: #e7ff85;
                                                direction: ltr;
                                                font-family: TimesNewRoman,
                                                    'Times New Roman', Times, Beskerville,
                                                    Georgia, serif;
                                                font-size: 85px;
                                                font-weight: 400;
                                                letter-spacing: normal;
                                                line-height: 120%;
                                                text-align: center;
                                                margin-top: 0;
                                                margin-bottom: 0;
                                                mso-line-height-alt: 102px;
                                                "
                                            >
                                                <span class="tinyMce-placeholder"
                                                ><em>Super Secret<br /></em
                                                ></span>
                                            </h1>
                                            </td>
                                        </tr>
                                        </table>
                                        <table
                                        class="icons_block block-7"
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            text-align: center;
                                        "
                                        >
                                        <tr>
                                            <td
                                            class="pad"
                                            style="
                                                vertical-align: middle;
                                                color: #000000;
                                                font-family: inherit;
                                                font-size: 14px;
                                                font-weight: 400;
                                                padding-left: 40px;
                                                padding-right: 40px;
                                                text-align: center;
                                            "
                                            >
                                            <table
                                                class="icons-outer"
                                                cellpadding="0"
                                                cellspacing="0"
                                                role="presentation"
                                                style="
                                                mso-table-lspace: 0pt;
                                                mso-table-rspace: 0pt;
                                                display: inline-table;
                                                "
                                            >
                                                <tr>
                                                <td
                                                    style="
                                                    vertical-align: middle;
                                                    text-align: center;
                                                    padding-top: 5px;
                                                    padding-bottom: 5px;
                                                    padding-left: 5px;
                                                    padding-right: 5px;
                                                    "
                                                >
                                                    <img
                                                    class="icon"
                                                    src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/8731/Recurso_10.png"
                                                    height="auto"
                                                    width="79"
                                                    align="center"
                                                    style="
                                                        display: block;
                                                        height: auto;
                                                        margin: 0 auto;
                                                        border: 0;
                                                    "
                                                    />
                                                </td>
                                                </tr>
                                            </table>
                                            </td>
                                        </tr>
                                        </table>
                                        <table
                                        class="button_block block-8"
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                        "
                                        >
                                        <tr>
                                            <td
                                            class="pad"
                                            style="
                                                padding-bottom: 10px;
                                                padding-left: 40px;
                                                padding-right: 40px;
                                                padding-top: 10px;
                                                text-align: center;
                                            "
                                            >
                                            <div class="alignment" align="center">
                                                <!--[if mso]>
                                <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.example.com" style="height:52px;width:202px;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#e7ff85">
                                <w:anchorlock/>
                                <v:textbox inset="0px,0px,0px,0px">
                                <center dir="false" style="color:#02151c;font-family:'Trebuchet MS', Tahoma, sans-serif;font-size:16px">
                                <!
                                                [endif]--><a
                                                href="${resetPasswordLink}"
                                                target="_blank"
                                                style="
                                                    background-color: #e7ff85;
                                                    border-bottom: 0px solid transparent;
                                                    border-left: 0px solid transparent;
                                                    border-radius: 0px;
                                                    border-right: 0px solid transparent;
                                                    border-top: 0px solid transparent;
                                                    color: #02151c;
                                                    display: inline-block;
                                                    font-family: 'Oxygen', 'Trebuchet MS',
                                                    'Lucida Grande', 'Lucida Sans Unicode',
                                                    'Lucida Sans', Tahoma, sans-serif;
                                                    font-size: 16px;
                                                    font-weight: 400;
                                                    mso-border-alt: none;
                                                    padding-bottom: 10px;
                                                    padding-top: 10px;
                                                    text-align: center;
                                                    text-decoration: none;
                                                    width: auto;
                                                    word-break: keep-all;
                                                "
                                                ><span
                                                    style="
                                                    padding-left: 30px;
                                                    padding-right: 30px;
                                                    font-size: 16px;
                                                    display: inline-block;
                                                    letter-spacing: 1px;
                                                    "
                                                    ><span
                                                    style="
                                                        word-break: break-word;
                                                        line-height: 32px;
                                                    "
                                                    >Change Password</span
                                                    ></span
                                                ></a
                                                ><!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                            </div>
                                            </td>
                                        </tr>
                                        </table>
                                        <div
                                        class="spacer_block block-9"
                                        style="
                                            height: 110px;
                                            line-height: 110px;
                                            font-size: 1px;
                                        "
                                        >
                                        &#8202;
                                        </div>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                        <table
                        class="row row-2"
                        align="center"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                        >
                        <tbody>
                            <tr>
                            <td>
                                <table
                                class="row-content stack"
                                align="center"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    background-color: #02151c;
                                    border-radius: 0;
                                    color: #000000;
                                    width: 650px;
                                    margin: 0 auto;
                                "
                                width="650"
                                >
                                <tbody>
                                    <tr>
                                    <td
                                        class="column column-1"
                                        width="100%"
                                        style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        font-weight: 400;
                                        text-align: left;
                                        padding-bottom: 5px;
                                        padding-top: 5px;
                                        vertical-align: top;
                                        border-top: 0px;
                                        border-right: 0px;
                                        border-bottom: 0px;
                                        border-left: 0px;
                                        "
                                    >
                                        <table
                                        class="heading_block block-1"
                                        width="100%"
                                        border="0"
                                        cellpadding="10"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                        "
                                        >
                                        <tr>
                                            <td class="pad">
                                            <h1
                                                style="
                                                margin: 0;
                                                color: #1e0e4b;
                                                direction: ltr;
                                                font-family: Lato, Tahoma, Verdana, Segoe,
                                                    sans-serif;
                                                font-size: 20px;
                                                font-weight: 700;
                                                letter-spacing: normal;
                                                line-height: 120%;
                                                text-align: center;
                                                margin-top: 0;
                                                margin-bottom: 0;
                                                mso-line-height-alt: 24px;
                                                "
                                            >
                                                <span class="tinyMce-placeholder"
                                                ><span style="color: #ffffff"
                                                    >Don't share your password with
                                                    anyone.</span
                                                ></span
                                                >
                                            </h1>
                                            </td>
                                        </tr>
                                        </table>
                                        <table
                                        class="heading_block block-2"
                                        width="100%"
                                        border="0"
                                        cellpadding="10"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                        "
                                        >
                                        <tr>
                                            <td class="pad">
                                            <h1
                                                style="
                                                margin: 0;
                                                color: #1e0e4b;
                                                direction: ltr;
                                                font-family: Lato, Tahoma, Verdana, Segoe,
                                                    sans-serif;
                                                font-size: 20px;
                                                font-weight: 700;
                                                letter-spacing: normal;
                                                line-height: 120%;
                                                text-align: center;
                                                margin-top: 0;
                                                margin-bottom: 0;
                                                mso-line-height-alt: 24px;
                                                "
                                            >
                                                <span class="tinyMce-placeholder"
                                                ><span style="color: #ffffff"
                                                    >Make a strong password.</span
                                                ></span
                                                >
                                            </h1>
                                            </td>
                                        </tr>
                                        </table>
                                        <div
                                        class="spacer_block block-3"
                                        style="
                                            height: 15px;
                                            line-height: 15px;
                                            font-size: 1px;
                                        "
                                        >
                                        &#8202;
                                        </div>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                        <table
                        class="row row-3"
                        align="center"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                        >
                        <tbody>
                            <tr>
                            <td>
                                <table
                                class="row-content stack"
                                align="center"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    background-color: #02151c;
                                    border-radius: 0;
                                    color: #000000;
                                    width: 650px;
                                    margin: 0 auto;
                                "
                                width="650"
                                >
                                <tbody>
                                    <tr>
                                    <td
                                        class="column column-1"
                                        width="100%"
                                        style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        font-weight: 400;
                                        text-align: left;
                                        padding-bottom: 5px;
                                        padding-top: 5px;
                                        vertical-align: top;
                                        border-top: 0px;
                                        border-right: 0px;
                                        border-bottom: 0px;
                                        border-left: 0px;
                                        "
                                    >
                                        <div
                                        class="spacer_block block-1"
                                        style="
                                            height: 15px;
                                            line-height: 15px;
                                            font-size: 1px;
                                        "
                                        >
                                        &#8202;
                                        </div>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                        <table
                        class="row row-4"
                        align="center"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffffff;
                        "
                        >
                        <tbody>
                            <tr>
                            <td>
                                <table
                                class="row-content stack"
                                align="center"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    background-color: #ffffff;
                                    color: #000000;
                                    width: 650px;
                                    margin: 0 auto;
                                "
                                width="650"
                                >
                                <tbody>
                                    <tr>
                                    <td
                                        class="column column-1"
                                        width="100%"
                                        style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        font-weight: 400;
                                        text-align: left;
                                        padding-bottom: 5px;
                                        padding-top: 5px;
                                        vertical-align: top;
                                        border-top: 0px;
                                        border-right: 0px;
                                        border-bottom: 0px;
                                        border-left: 0px;
                                        "
                                    >
                                        <table
                                        class="icons_block block-1"
                                        width="100%"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            text-align: center;
                                        "
                                        >
                                        <tr>
                                            <td
                                            class="pad"
                                            style="
                                                vertical-align: middle;
                                                color: #1e0e4b;
                                                font-family: 'Inter', sans-serif;
                                                font-size: 15px;
                                                padding-bottom: 5px;
                                                padding-top: 5px;
                                                text-align: center;
                                            "
                                            >
                                            <table
                                                width="100%"
                                                cellpadding="0"
                                                cellspacing="0"
                                                role="presentation"
                                                style="
                                                mso-table-lspace: 0pt;
                                                mso-table-rspace: 0pt;
                                                "
                                            >
                                                <tr>
                                                <td
                                                    class="alignment"
                                                    style="
                                                    vertical-align: middle;
                                                    text-align: center;
                                                    "
                                                >
                                                    <!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                    <!--[if !vml]><!-->
                                                    <table
                                                    class="icons-inner"
                                                    style="
                                                        mso-table-lspace: 0pt;
                                                        mso-table-rspace: 0pt;
                                                        display: inline-block;
                                                        margin-right: -4px;
                                                        padding-left: 0px;
                                                        padding-right: 0px;
                                                    "
                                                    cellpadding="0"
                                                    cellspacing="0"
                                                    role="presentation"
                                                    >
                                                    <!--<![endif]-->
                                                    <tr>
                                                        <td
                                                        style="
                                                            vertical-align: middle;
                                                            text-align: center;
                                                            padding-top: 5px;
                                                            padding-bottom: 5px;
                                                            padding-left: 5px;
                                                            padding-right: 6px;
                                                        "
                                                        >
                                                        <a
                                                            href="http://designedwithbeefree.com/"
                                                            target="_blank"
                                                            style="text-decoration: none"
                                                            ><img
                                                            class="icon"
                                                            alt="Beefree Logo"
                                                            src="https://d1oco4z2z1fhwp.cloudfront.net/assets/Beefree-logo.png"
                                                            height="auto"
                                                            width="34"
                                                            align="center"
                                                            style="
                                                                display: block;
                                                                height: auto;
                                                                margin: 0 auto;
                                                                border: 0;
                                                            "
                                                        /></a>
                                                        </td>
                                                        <td
                                                        style="
                                                            font-family: 'Inter', sans-serif;
                                                            font-size: 15px;
                                                            font-weight: undefined;
                                                            color: #1e0e4b;
                                                            vertical-align: middle;
                                                            letter-spacing: undefined;
                                                            text-align: center;
                                                        "
                                                        >
                                                        <a
                                                            href="http://designedwithbeefree.com/"
                                                            target="_blank"
                                                            style="
                                                            color: #1e0e4b;
                                                            text-decoration: none;
                                                            "
                                                            >Designed with Beefree</a
                                                        >
                                                        </td>
                                                    </tr>
                                                    </table>
                                                </td>
                                                </tr>
                                            </table>
                                            </td>
                                        </tr>
                                        </table>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </td>
                    </tr>
                </tbody>
                </table>
                <!-- End -->
            </body>
        </html>
    `;

    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        var mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: subject,
            html: htmlContent
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json(
            new SuccessResponse(
                200,
                "Send email query was successful",
                "Email sent successfuly to you email",
            )
        );
    } catch (error) {
        res.status(500).json(
            new ErrorResponse(
                500,
                "Send email internal server error",
                error.message
            )
        );
    }
}

module.exports = {
    sendNodemailerEmail,
}