<div class="col-md-2">
      <div class="wrapper">
            <aside class="main_sidebar">
                <ul>
                    <li class="<?php strpos(url()->current(), 'home') ? print 'active' : ""; ?>"><i class="fa fa-bell"></i><a href="{{ url('/home')}}">Noticias</a></li>
                    <li class="<?php strpos(url()->current(), 'tasks') ? print 'active' : ""; ?>"><i class="fa fa-tasks"></i><a href="{{ url('/tasks')}}">Tareas</a></li>
                    <li class="<?php strpos(url()->current(), 'users') ? print 'active' : ""; ?>"><i class="fas fa-user"></i><a href="{{ url('/users')}}">Usuarios</a></li>
                    <li class="<?php strpos(url()->current(), 'groups') ? print 'active' : ""; ?>"><i class="fas fa-group"></i><a href="{{ url('/groups')}}">Grupos</a></li>
                    <li class="<?php strpos(url()->current(), 'calendar') ? print 'active' : ""; ?>"><i class="fa fa-calendar"></i><a href="{{ url('/calendar')}}">Calendario</a></li>


                </ul>
            </aside>
      </div><!--Final wrapper -->
</div>
