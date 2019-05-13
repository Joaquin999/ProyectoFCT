@extends('layouts.app')

@section('content')
<div class="container">
      <div class="login-form">
      <div class="main-div">
          <div class="panel">
         <h2>Inicio de Sesión</h2>
         <p>Escribe tu correo y contraseña</p>
         </div>
          <form id="Login" method="POST" action="{{ route('login') }}">
              @csrf
              <div class="form-group">


                  <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="Dirección Email">
                  @error('email')
                      <span class="invalid-feedback" role="alert">
                          <strong>{{ $message }}</strong>
                      </span>
                  @enderror
              </div>

              <div class="form-group">

                  <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="Contraseña">
                  @error('password')
                      <span class="invalid-feedback" role="alert">
                          <strong>{{ $message }}</strong>
                      </span>
                  @enderror
              </div>

                      @if (Route::has('password.request'))
                      <div class="forgot">
                          <a href="{{ route('password.request') }}">
                              He olvidado mi contraseña
                          </a>
                      </div>
                      @endif

              <button type="submit" class="btn btn-primary">Iniciar Sesión</button>

          </form>
          </div>
      </div>



</div>
@endsection
