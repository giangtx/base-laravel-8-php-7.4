<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" href="/images/agri_logo_icon01.png" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Example app') }}</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="plugins/bootstrap/bootstrap.min.css">
    <!-- Styles -->
    <link href="{{ mix('css/build/style.css') }}" type="text/css" rel="stylesheet" />
  </head>
  <body class="">
    @include('includes.header')

    @yield('content')

    @include('includes.footer')
    @yield('js')
    <!-- Bootstrap jQuery -->
    <script src="plugins/bootstrap/bootstrap.min.js" defer></script>
    <script src="{{ mix('js/build/script.js') }}" defer></script>
  </body>
</html>
