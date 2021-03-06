<head>
    <style>
    * {
        margin: 0;
        padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        font-family: Raleway !important;
        color: #3D3D3D !important;
    }

    * {
        font-family: Raleway !important;
    }

    img {
        max-width: 100%;
    }

    .collapse {
        margin: 0;
        padding: 0;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: none;
        width: 100% !important;
        height: 100%;
    }


    /* ------------------------------------- 
        ELEMENTS 
------------------------------------- */

    a {
        color: #2BA6CB;
    }

    .btn {
        text-decoration: none;
        color: #FFF !important;
        background-color: #16baff;
        padding: 2px 25px;
        font-weight: bold;
        margin-right: 10px;
        text-align: center;
        cursor: pointer;
        display: inline-block;
    }

    p.callout {
        padding: 15px;
        background-color: #ECF8FF;
        margin-bottom: 15px;
    }

    .callout a {
        font-weight: bold;
        color: #2BA6CB;
    }

    table.social {
        /*  padding:15px; */
        background-color: #ebebeb;

    }

    .social .soc-btn {
        padding: 3px 7px;
        font-size: 12px;
        margin-bottom: 10px;
        text-decoration: none;
        color: #FFF;
        font-weight: bold;
        display: block;
        text-align: center;
    }

    a.fb {
        background-color: #3B5998 !important;
    }

    a.tw {
        background-color: #1daced !important;
    }

    a.gp {
        background-color: #DB4A39 !important;
    }

    a.ms {
        background-color: #000 !important;
    }

    .sidebar .soc-btn {
        display: block;
        width: 100%;
    }

    /* ------------------------------------- 
        HEADER 
------------------------------------- */

    table.head-wrap {
        width: 100%;
    }

    .header.container table td.logo {
        padding: 15px;
    }

    .header.container table td.label {
        padding: 15px;
        padding-left: 0px;
    }


    /* ------------------------------------- 
        BODY 
------------------------------------- */

    table.body-wrap {
        width: 100%;
    }

    h3.color {
        color: #3D3D3D !important;
    }

    head .span-font {
        font-size: 17px;
        font-weight: 100;
    }

    /* ------------------------------------- 
        FOOTER 
------------------------------------- */

    table.footer-wrap {
        width: 100%;
        clear: both !important;
    }

    .footer-wrap .container td.content p {
        border-top: 1px solid rgb(215, 215, 215);
        padding-top: 15px;
    }

    .footer-wrap .container td.content p {
        font-size: 10px;
        font-weight: bold;

    }


    /* ------------------------------------- 
        TYPOGRAPHY 
------------------------------------- */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: Raleway !important;
        color: #3D3D3D !important;
    }

    h1 small,
    h2 small,
    h3 small,
    h4 small,
    h5 small,
    h6 small {
        font-size: 60%;
        color: #3D3D3D;
        line-height: 0;
        text-transform: none;
    }

    h1 {
        font-weight: 200;
        font-size: 44px;
    }

    h2 {
        font-weight: 200;
        font-size: 37px;
    }

    h3 {
        font-weight: 500;
        font-size: 27px;
    }

    h4 {
        font-weight: 500;
        font-size: 23px;
    }

    h5 {
        font-weight: 900;
        font-size: 17px;
    }

    h6 {
        font-weight: 900;
        font-size: 14px;
        text-transform: uppercase;
        color: #3D3D3D;
    }

    .collapse {
        margin: 0 !important;
    }

    p,
    ul {
        margin-bottom: 10px;
        font-weight: normal;
        font-size: 14px;
        line-height: 1.6;
    }

    p.lead {
        font-size: 17px;
    }

    p.last {
        margin-bottom: 0px;
    }

    ul li {
        margin-left: 5px;
        list-style-position: inside;
    }



    /* --------------------------------------------------- 
        RESPONSIVENESS
        Nuke it from orbit. It's the only way to be sure. 
------------------------------------------------------ */

    /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */

    .container {
        display: block !important;
        max-width: 600px !important;
        /*margin: 0 auto !important;*/
        /* makes it centered */
        clear: both !important;
    }

    /* This should also be a block element, so that it will fill 100% of the .container */

    .content {
        padding: 15px;
        max-width: 600px;
        /*margin: 0 auto;*/
        display: block;
    }

    /* Let's make sure tables in the content area are 100% wide */

    .content table {
        width: 100%;
    }


    /* Odds and ends */

    .column {
        width: 300px;
        float: left;
    }

    .column tr td {
        padding: 15px;
    }

    .column-wrap {
        padding: 0 !important;
        margin: 0 auto;
        max-width: 600px !important;
    }

    .column table {
        width: 100%;
    }

    .social .column {
        width: 280px;
        min-width: 279px;
        float: left;
    }

    /* Be sure to place a .clear element after each set of columns, just to be safe */

    .clear {
        display: block;
        clear: both;
    }


    .newClass{font-size: .875rem !important;
   letter-spacing: .25px !important;
   border-radius: 4px !important;
   box-sizing: border-box !important;
   color: #5f6368 !important;
   cursor: pointer !important;
   font-weight: 600 !important;
   height: 36px !important;
   padding: 8px 33px !important;
   text-align: center !important;
   box-shadow: inset 0 0 0 1px #dadce0 !important;
   user-select: none !important;
   text-decoration: none !important;
}
.newClass:hover{
backgroundcolor: #16baff !important;
color:#ffffff !important;
}


    /* ------------------------------------------- 
        PHONE
        For clients that support media queries.
        Nothing fancy. 
-------------------------------------------- */

    @media only screen and (max-width: 600px) {

        a[class="btn"] {
            display: block !important;
            margin-bottom: 10px !important;
            background-image: none !important;
            margin-right: 0 !important;
        }

        div[class="column"] {
            width: auto !important;
            float: none !important;
        }

        table.social div[class="column"] {
            width: auto !important;
        }

    }
</style>
</head>
<body bgcolor="#FFFFFF">
{{-- <table class="head-wrap" bgcolor="#f7f7f7">
    <tr>
        <td></td>
        <td class="header container">

            <div class="content">
                <table bgcolor="#f7f7f7">
                    <tr>

                        <td>
                            <img src="{{ url('/public/img/logo.png') }}"
                                width="200px" height="100px" />
                        </td>

                    </tr>
                </table>
            </div>

        </td>
        <td></td>
    </tr>
</table> --}}

<div class="row" style="background-color:#f7f7f7">
    <center>
        <img src="{{ url('/public/img/logo.png') }}"
                                width="300px" height="80px" />
    </center>

</div>

<table class="body-wrap">
{{--     <tr>
        <td></td>
        <td class="container" bgcolor="#FFFFFF">

            <div class="content">
                <table>
                    <tr>
                        <td> --}}
                            <p class="lead">We are excited to have you join our community. Here’s what you need to know.
                            </p>
                            <br>
                            <hr>
                            <br>

                            <p class="lead">Hello &nbsp; <b>{{ $name }}</b>!

                            </p>

                            <p class="lead">You’ve been added as a Responder to your school’s Waves Network and have been given access to the Waves App. Having access to the Waves App provides students with the help they need, when they need it, and helps shorten the distance between students and the office of student services.

                            </p>

                            <p class="lead">BBefore jumping into the Waves App, here are a few things to know. To access the Waves App, you will login using the following information: </p>

                            <p class="lead">
                                <li>Your Employee ID: {{ $responderId }} </li>
                                <li>Your School’s Access Code, which is: {{ $accessCode }} </li>
                                <li>Your School’s Authorization Code, which is: {{ $authCode }}</li>
                            </p>

                            <p class="lead">Once you select your school and connect to your school’s Waves Network, you wi required to create
                                a password to protect your account. Once you knock out these initial few steps, you’re good
                                to go. </p>

                            <p class="lead">Once you select your school and connect to your school’s Waves Network, you will be required to create a password to protect your account. Once you knock out these initial few steps, you’re good to go.
                                Once you set up your account, you will have direct access to communication tools and scheduling tools to access your students more effectively. </p>

                            <p class="lead">If you’re feeling ready, click below and jump in. We’re glad you’re here. </p>

                            <p class="lead">
                                <b>Stay Awesome, </b>
                            </p>
                            <p class="lead">The Waves Team</p>
                            <a style="text-decoration:none;color: #FFF !important;background-color: #16baff;padding:2px 25px;font-weight:bold;margin-right:10px;text-align:center;cursor:pointer;display: inline-block;"
                                target="_blank" href="{{ url('../waves/#/signup') }}">Jump In</a>
                        {{-- </td>
                    </tr>
                </table>
            </div>
        </td>
        <td></td>
    </tr>
</table> --}}
<!-- /BODY -->


<div class="row" style="background-color:#f7f7f7">
    <center>
        <img src="{{ url('/public/img/logo.png') }}"
                                width="300px" height="80px" />
                                <br>
                                © 2018 Above the Waves, Inc.
    </center>

</div>
{{-- <table class="head-wrap" bgcolor="#f7f7f7" style="width: 100%;">
    <tr>
        <td></td>
        <td class="header container">

            <div class="content">
                <table bgcolor="#f7f7f7" style="width: 100%;">
                    <tr>
                        <td align="center">
                            <img src="{{ url('/public/img/logo.png') }}"
                                width="150px" height="80px" />
                        </td>

                    </tr>
                    <tr>
                        <td align="center">
                            <p>
                                © 2018 Above the Waves, Inc.
                            </p>
                        </td>
                    </tr>
                </table>
            </div>

        </td>
        <td></td>
    </tr>
</table> --}}
<!-- /HEADER -->

</body>