@extends('app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2" >
                <div id="messages" ></div>
            </div>
        </div>
    </div>
    <script src="{{ url('js/jquery-3.3.1.js')}}"></script>
        <script src="{{ url('js/jquery-migrate.min.js') }}"></script>
        <script src="{{ url('js/socket.io.js') }}"></script>
    <script>
        var socket = io.connect('http://localhost:8890');
        socket.on('message', function (data) {
            console.log(data);
            $( "#messages" ).prepend( "<p>"+data+"</p>" );
            var number = $('#messages').children();
            if (number.length > 5)
               $('#messages').children().last().remove();
        });

        socket.on('onDire', function (data) {
                var data = JSON.parse(data);
                    console.log(data.a);

                });

    </script>


@endsection
