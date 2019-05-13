@extends('layouts.app')

@section('content')
<div class="container">

  <div class="login-form">
  <div class="main-div">
      <div class="panel">
     <h2>Registro</h2>
     <p>Escribe tu nombre, correo y contraseña para registrarte</p>
     </div>
      <form method="POST" action="{{ route('register') }}">
          @csrf
          <div class="form-group">
              <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus placeholder="Nombre">
              @error('name')
                  <span class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                  </span>
              @enderror
          </div>

          <div class="form-group">
              <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="Email">
              @error('email')
                  <span class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                  </span>
              @enderror
          </div>

          <div class="form-group">
              <input  id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="Contraseña">
              @error('password')
                  <span class="invalid-feedback" role="alert">
                      <strong>{{ $message }}</strong>
                  </span>
              @enderror
          </div>

          <div class="form-group">
                  <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password" placeholder="Confirmar contraseña">
          </div>


          <button type="submit" class="btn btn-primary">Registrar</button>
      </form>
      </div>
  </div>
</div>
@endsection
