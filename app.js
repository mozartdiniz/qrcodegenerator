var QrCode = (function () {
	var QrCode = function () {

		this.textInput;
		this.qrLib;
		this.outputEl;
		this.basecontainer;

		this.createBaseContainer = function () {
			this.basecontainer = document.createElement ('div');
			this.basecontainer.className = 'qrCodeBaseContainer';
			document.body.appendChild (this.basecontainer);
		};

		this.createTextInput = function () {
			this.textInput      = document.createElement ('textarea');
			this.textInput.rows = 8;
			this.textInput.cols = 40;
			this.basecontainer.appendChild (this.textInput);
		};

		this.createOutput = function () {
			this.outputEl = document.createElement ('div');
			this.outputEl.className = 'outPutQR';
			this.basecontainer.appendChild (this.outputEl);
		};

		this.addEventListeners = function () {
			this.textInput.addEventListener ('blur', this.createQRCode.bind (this));
		};

		this.createQRCode = function () {
			this.qrLib.makeCode (this.textInput.value);
		};

		this.init = function () {

			this.createBaseContainer ();
			this.createTextInput ();
			this.createOutput ();
			this.addEventListeners ();

			this.qrLib = new QRCode (this.outputEl, {
				width : 100,
				height : 100
			});
		};

		this.init ();
	};

	return QrCode
}());
