<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGruposUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grupos__users', function (Blueprint $table) {
            $table->integer('usuario');
            $table->integer('grupo');
            $table->primary(['usuario','grupo']);
            $table->timestamps();

            $table->foreign('usuario')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('grupo')->references('id')->on('grupos')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grupos__users');
    }
}
