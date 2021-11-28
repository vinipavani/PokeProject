<template>
    <div>

        <transition name="fade" appear>
            <div class="modal-overlay"></div>
        </transition>

        <transition name="slide" appear>
            <div class='modal-content' >
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</div>
                <div>took a galley of type and scrambled it to make a type specimen book.</div>
            </div>
        </transition>

    </div>
</template>


<script>
export default {
    name: "PokeModal",
    props: ['pokemonDataModal'],
    data(){
        return {
        }
    },
};
</script>


<style scoped>
    @import '../assets/global.css';
    .modal-overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        z-index: 90;
        background-color: rgba(0,0,0, 0.6);
    }

    /* Transição gradual do background escuro para entrada do modal */
    .fade-enter-active, 
    .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .modal-content {
        width: 70%;
        padding: 2.5% 2.5%;
        height: 80%;
        border-radius: 16px;

        position: absolute;
        left: 15%;
        right: 15%;
        top: 5%;

        z-index: 91;
    }
</style>
