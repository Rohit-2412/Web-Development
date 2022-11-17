<template>
    <div id="app" class="px-3 py-2">
        <span class="text-success fs-4 mt-3">{{ status }}</span>
        <div class="journey border border-3 border-warning my-2 p-2">
            <input type="file" id="imageLoader" @change="updateCanvasImage" />
            <canvas id="imageCanvas" ref="imageCanvas"></canvas>
        </div>
        <div class="d-flex justify-content-around mt-4">
            <button class="btn btn-outline-success" @click="translate">
                Convert
            </button>
            <button class="btn btn-outline-danger" @click="speak">Speak</button>
        </div>
        <p class="my-4 fs-5" v-show="showText">
            <span class="fw-bold">Text (Hindi): </span>{{ conversion }}
        </p>
        <p class="mt-2 fs-5" v-show="showConvert">
            <span class="fw-bold">Converted Text (English): </span>
            {{ translation }}
        </p>
    </div>
</template>
<style scoped>
#imageCanvas {
    box-sizing: border-box;
}
</style>
<script>
export default {
    name: "MainComponent",

    data() {
        return {
            dataUrl: "",
            status: "",
            conversion: "",
            translation: "",
            showText: false,
            showConvert: false,
        };
    },
    methods: {
        updateCanvasImage(e) {
            this.status = "Initializing ...";
            var self = this;

            var reader,
                files = e.target.files;

            reader = new FileReader();

            reader.onload = (e) => {
                var img = new Image();
                img.onload = function () {
                    self.drawCanvasImage(img);
                };
                img.src = e.target.result;
            };

            reader.readAsDataURL(files[0]);
        },

        drawCanvasImage(img) {
            var vm = this;
            var canvas = this.$refs.imageCanvas;
            canvas.width = img.width;
            canvas.height = img.height;

            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            this.dataUrl = canvas.toDataURL();
            this.status = "Reading . . .";
            // eslint-disable-next-line
            Tesseract.recognize(this.dataUrl, "hin", {
                logger: (log) => {
                    console.log(log);
                },
            })
                .then((result) => {
                    // alert(result.data.text);
                    this.conversion = result.data.text;
                    vm.status = "";
                    this.showText = true;
                })
                .catch((error) => console.log(error))
                .finally(() => {});
        },

        translate() {
            const url =
                "https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=en&api-version=3.0&from=hi&profanityAction=NoAction&textType=plain";

            const options = {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "X-RapidAPI-Key":
                        "b71f3df8dcmsh8ec188412370131p121c43jsn95bfb83a5bfb",
                    "X-RapidAPI-Host":
                        "microsoft-translator-text.p.rapidapi.com",
                },

                // set body content to entered text
                body: JSON.stringify([
                    {
                        Text: this.conversion,
                    },
                ]),
            };

            fetch(url, options)
                .then((res) => res.json())
                .then(
                    // set result to translated text
                    (json) => {
                        this.showConvert = true;
                        this.translation = json[0].translations[0].text;
                    }
                )
                .catch((err) => console.error("error:" + err));
        },

        speak() {
            const utterance = new SpeechSynthesisUtterance(this.translation);
            speechSynthesis.speak(utterance);
        },
    },
};
</script>
