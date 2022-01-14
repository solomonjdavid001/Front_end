<!DOCTYPE html>
<html lang="en">
    <head>
     
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>STUDENT DETAILS</title>
        <link rel="icon" type="image/x-icon" href="DSI-Bangalore-Logo.png" />
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles.css" rel="stylesheet" />
        <%- include('../public/css/dashboard.ejs'); %>
    </head>
    <body id="page-top">
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div class="container px-5">
                <img class="img-student-icon" src="student-icon.png" alt="student-icon-svg" width="60" height="60" margin="px" margin-left: 10%>
                <a class="navbar-brand" href="#page-top">    STUDENT DETAILS</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="https://dsce-connect-ruddy.vercel.app/index.html">LOGOUT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Header-->
        <%ram.forEach(red => {%>
        <header class="masthead text-center text-white">
            <div class="masthead-content">
                <div class="container px-5">
                    <h3>WELCOME, <%=red.name%></h3><br>
                    <table class="table table-borderless table-dark" width="10%">
                         <thead> 
                          <tr>
                            <th scope="col">USN</th>
                            <th scope="col"><%=red.USN%></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">FATHER'S NAME</th>
                            <td><%=red.Father_Name%></td>
                          </tr>
                          <tr>
                            <th scope="row">MOTHERS NAME</th>
                            <td><%=red.Mother_Name%></td>
                          </tr>
                          <tr>
                            <th scope="row">Email_id</th>
                            <td colspan="2"> <%=red.email_id%></td>
                          </tr>
                          <tr>
                            <th scope="row">BRANCH</th>
                            <td colspan="2"><%=red.branch%></td>
                          </tr>
                          <tr>
                            <th scope="row">PROCTOR</th>
                            <td colspan="2"><%=red.proctor%></td>
                          </tr>
                        </tbody>
                      </table>
                    <a class="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">ATTENDANCE</a>
                </div>
            </div>
            <div class="bg-circle-1 bg-circle"></div>
            <div class="bg-circle-2 bg-circle"></div>
            <div class="bg-circle-3 bg-circle"></div>
            <div class="bg-circle-4 bg-circle"></div>
        </header>
        Content section 1-->
        <section id="scroll">            
            <header class="foot-off">
                <div class="foot-off-1">
                    <div class="container px-5">
                        <div class="progress">
                            <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar"
                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">
                            <%=red.me%>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
        </section>
        <%})%>
    </body>
</html>