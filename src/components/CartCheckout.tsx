import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Trash2, ShoppingBag, Check, Copy, UploadCloud, 
  Lock, ArrowRight, Mail, Phone, User, CheckCircle, 
  Sparkles, FileText, Smartphone, RefreshCw 
} from 'lucide-react';
import { useApp, CartItem } from '../context/AppContext';

export default function CartCheckout() {
  const { 
    cart, 
    removeFromCart, 
    clearCart, 
    cartTotal, 
    isCartOpen, 
    setIsCartOpen, 
    theme 
  } = useApp();

  const [selectedBank, setSelectedBank] = useState<'abyssinia' | 'cbe' | 'dashen'>('cbe');
  const [copied, setCopied] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userEmail, setUserEmail] = useState('');
  
  // File upload state (receipt screenshot)
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [screenshotPreview, setScreenshotPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Simulation state
  const [isUploadingSim, setIsUploadingSim] = useState(false);
  const [simStep, setSimStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [refCode, setRefCode] = useState('');

  const banks = {
    cbe: {
      name: "Commercial Bank of Ethiopia",
      short: "CBE",
      account: "100002345783",
      color: "from-purple-600 to-indigo-700",
      logoText: "CBE"
    },
    abyssinia: {
      name: "Bank of Abyssinia",
      short: "Abyssinia",
      account: "10002356891",
      color: "from-yellow-500 to-amber-700",
      logoText: "BoA"
    },
    dashen: {
      name: "Dashen Bank",
      short: "Dashen",
      account: "1000569847",
      color: "from-orange-500 to-red-600",
      logoText: "DB"
    }
  };

  const handleCopyAccount = (acc: string) => {
    navigator.clipboard.writeText(acc);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG/JPEG/GIF) representing the receipt screenshot.');
      return;
    }
    setScreenshotFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setScreenshotPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeAttachedFile = () => {
    setScreenshotFile(null);
    setScreenshotPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Compile detailed email package for mailto link
  const handleSendViaEmailClient = () => {
    if (!fullName || !phoneNumber) {
      alert("Please provide your Name and Phone Number so we can verify your booking.");
      return;
    }
    
    // Generate a secure confirmation code
    const generatedCode = "GB-" + Math.floor(100000 + Math.random() * 900000);
    setRefCode(generatedCode);

    const emailSubject = encodeURIComponent(`GENBATA Energy Order Payment Proof [Ref: ${generatedCode}]`);
    
    const itemsDescription = cart.map(item => `- ${item.name} (${item.type}) - ${item.price.toLocaleString()} BIRR`).join('\n');
    
    const emailBody = encodeURIComponent(
      `DEAR GENBATA SYSTEMS MANAGEMENT,\n\n` +
      `I have completed the bank transfer for my solar energy order. Below are the transaction details:\n\n` +
      `-------------------------------------------\n` +
      `CUSTOMER NAME: ${fullName}\n` +
      `PHONE NUMBER: ${phoneNumber}\n` +
      `EMAIL ADDRESS: ${userEmail || 'N/A'}\n` +
      `ORDER REFERENCE CODE: ${generatedCode}\n` +
      `-------------------------------------------\n\n` +
      `CHOSEN PAYMENT BANK: ${banks[selectedBank].name}\n` +
      `TRANSFERRED TO ACCOUNT: ${banks[selectedBank].account}\n` +
      `TOTAL PAYABLE AMOUNT: ${cartTotal.toLocaleString()} BIRR\n\n` +
      `PURCHASED CAPACITY & SERVICES:\n` +
      `${itemsDescription}\n\n` +
      `-------------------------------------------\n` +
      `*NOTE TO SENDER: PLEASE ENSURE YOU ATTACH THE PREVIEWED SCREENSHOT RECEIPT FILE DIRECTLY TO THE EMAIL BEFORE SENT.*`
    );

    window.open(`mailto:lenevovintage@gmail.com?subject=${emailSubject}&body=${emailBody}`);
  };

  // Simulation mode
  const handleSimulatedSecureUplink = () => {
    if (!fullName || !phoneNumber) {
      alert("Please provide your Name and Phone Number first.");
      return;
    }
    if (!screenshotFile) {
      alert("Please upload or drop a screenshot of the bank receipt/transfer confirmation first.");
      return;
    }

    // Generate reference code
    const generatedCode = "GB-" + Math.floor(100000 + Math.random() * 900000);
    setRefCode(generatedCode);

    setIsUploadingSim(true);
    setSimStep(0);

    const stepsIntervals = [
      "Establishing secure transaction handshake...",
      "Encrypting invoice payloads and receipt screenshot...",
      "Routing network packet to server logs...",
      "Confirming ledger records at GENBATA database (lenevovintage@gmail.com)...",
      "Transaction logged successfully!"
    ];

    const runSimulation = (step: number) => {
      if (step < stepsIntervals.length) {
        setSimStep(step);
        setTimeout(() => runSimulation(step + 1), 1200);
      } else {
        setIsUploadingSim(false);
        setIsSuccess(true);
      }
    };

    runSimulation(0);
  };

  const handleResetCheckout = () => {
    clearCart();
    setFullName('');
    setPhoneNumber('');
    setUserEmail('');
    removeAttachedFile();
    setIsSuccess(false);
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (!isUploadingSim) setIsCartOpen(false);
            }}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-2xl bg-slate-50 dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 shadow-2xl h-full flex flex-col z-10"
          >
            {/* Header */}
            <div className="p-8 border-b border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-900 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center font-black">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight italic text-slate-900 dark:text-white">
                    DEPLOYMENT CART
                  </h3>
                  <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                    Checkout & Bank Receipt Verification
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                disabled={isUploadingSim}
                className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer disabled:opacity-50"
              >
                <X size={20} />
              </button>
            </div>

            {/* Inner Content Area */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 select-none">
              {isSuccess ? (
                /* Success View */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-24 h-24 rounded-full bg-emerald-500/10 border-4 border-emerald-500 flex items-center justify-center mx-auto text-emerald-500 animate-bounce">
                    <CheckCircle size={48} strokeWidth={2.5} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white italic">
                      TRANSMISSION SUCCESSFUL!
                    </h4>
                    <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest max-w-md mx-auto leading-relaxed">
                      Your proof of payment and order list have been logged and routed to our audit inbox.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-800 rounded-3xl p-6 text-left max-w-md mx-auto space-y-4 shadow-lg">
                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">TRANSACTION REFERENCE</span>
                      <span className="font-mono text-xs font-black text-amber-500">{refCode}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">BUYER</span>
                      <span className="text-xs font-black uppercase text-slate-800 dark:text-white">{fullName}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">BANK</span>
                      <span className="text-xs font-black uppercase text-slate-800 dark:text-white">{banks[selectedBank].short}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">TOTAL AMOUNT RECORDED</span>
                      <span className="text-base font-black italic text-amber-500">{cartTotal.toLocaleString()} BIRR</span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={handleResetCheckout}
                      className="w-full max-w-sm bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-950 py-4.5 rounded-xl text-xs font-black uppercase tracking-widest cursor-pointer hover:scale-105 active:scale-95 transition-all"
                    >
                      Reset & Continue Browsing
                    </button>
                    <p className="text-[10px] text-slate-400 mt-3 font-semibold uppercase tracking-widest">
                      Transmission audit logged to lenevovintage@gmail.com
                    </p>
                  </div>
                </motion.div>
              ) : isUploadingSim ? (
                /* Simulation loading logs */
                <div className="flex flex-col items-center justify-center py-20 space-y-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full border-4 border-amber-400/20 border-t-amber-400 animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center text-amber-400">
                      <RefreshCw size={24} className="animate-pulse" />
                    </div>
                  </div>
                  <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 font-mono text-left text-xs text-slate-300 space-y-3 shadow-inner">
                    <div className="text-emerald-400 border-b border-slate-800 pb-2 flex justify-between">
                      <span>SECURE UPLINK IN PROGRESS</span>
                      <span>10.0.0.3000</span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-slate-500">[SYSTEM] initiating handshake...</div>
                      {simStep >= 0 && <div className="text-amber-300">✓ connection aligned (Port 3000)</div>}
                      {simStep >= 1 && <div className="text-blue-400">✓ encrypting metadata payload, file attached size: {(screenshotFile?.size ? (screenshotFile.size / 1024).toFixed(1) : 0)} KB</div>}
                      {simStep >= 2 && <div className="text-purple-400">✓ handshake resolved successfully</div>}
                      {simStep >= 3 && <div className="text-pink-400">✓ uploading screenshot image block to verification hub...</div>}
                      {simStep >= 4 && <div className="text-emerald-400 font-bold">✓ routing transaction to billing log: lenevovintage@gmail.com</div>}
                    </div>
                    <div className="pt-2 text-[10px] text-amber-500">
                      STEP {simStep + 1}/5: {simStep === 0 ? "Establishing network link..." : simStep === 1 ? "Encrypting packet..." : simStep === 2 ? "Resolving headers..." : simStep === 3 ? "Transmitting image block..." : "Resolving confirmation..."}
                    </div>
                  </div>
                </div>
              ) : cart.length === 0 ? (
                /* Empty Cart */
                <div className="text-center py-24 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-850 flex items-center justify-center mx-auto text-slate-400 dark:text-slate-600">
                    <ShoppingBag size={28} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-black uppercase text-slate-900 dark:text-white">
                      YOUR CART IS EMPTY
                    </h4>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest max-w-[240px] mx-auto leading-relaxed">
                      Select items or services above to begin building your off-grid system configuration.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-950 px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest cursor-pointer hover:scale-105 active:scale-95 transition-all"
                  >
                    Browse Systems
                  </button>
                </div>
              ) : (
                /* Main Cart Item & Payment Form Checkout */
                <div className="space-y-8 animate-fade-in text-slate-950 dark:text-slate-100">
                  {/* Items list */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                        SELECTED HARDWARE & SYSTEMS ({cart.length})
                      </span>
                      <button
                        onClick={clearCart}
                        className="text-[10px] font-black uppercase text-red-500 hover:text-red-400 tracking-widest cursor-pointer"
                      >
                        Clear All
                      </button>
                    </div>

                    <div className="space-y-3">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border-2 border-slate-900/5 dark:border-slate-850 shadow-sm"
                        >
                          <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-850 flex items-center justify-center text-slate-600 dark:text-amber-400 font-bold shrink-0">
                            {item.type[0]}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-black text-sm uppercase tracking-tight text-slate-900 dark:text-white truncate">
                              {item.name}
                            </h5>
                            <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest">
                              {item.type}
                            </span>
                          </div>
                          <div className="text-right shrink-0">
                            <div className="font-mono text-sm font-black text-slate-900 dark:text-amber-400">
                              {item.price.toLocaleString()} BIRR
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-slate-400 hover:text-red-500 text-xs cursor-pointer p-1"
                              title="Delete Item"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Total Pay Box */}
                    <div className="bg-amber-400 text-slate-900 p-6 rounded-3xl border-4 border-slate-900 flex items-center justify-between shadow-[6px_6px_0px_#0f172a] dark:shadow-[6px_6px_0px_white]">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-800 leading-none mb-1">
                          TOTAL CALCULATED PAY
                        </div>
                        <div className="text-xs font-bold leading-none uppercase">
                          Inclusive of all technical audits
                        </div>
                      </div>
                      <div className="text-2xl font-black italic tracking-tighter shrink-0 select-text">
                        {cartTotal.toLocaleString()} BIRR
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Pay to Ethiopian Bank Accounts */}
                  <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-900">
                    <div>
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-1">
                        STEP 1: SELECT BANK ACCOUNT FOR DIRECT TRANSFER
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Choose your banking client and copy the account number to make your transfer.
                      </p>
                    </div>

                    {/* Bank choices GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {(Object.keys(banks) as Array<keyof typeof banks>).map((bankKey) => {
                        const bank = banks[bankKey];
                        const isSelected = selectedBank === bankKey;
                        return (
                          <button
                            key={bankKey}
                            onClick={() => setSelectedBank(bankKey)}
                            className={`p-4 rounded-2xl flex flex-col items-start border-2 text-left transition-all relative overflow-hidden cursor-pointer ${
                              isSelected
                                ? 'bg-slate-950 text-white border-amber-400 ring-4 ring-amber-400/10'
                                : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-slate-400'
                            }`}
                          >
                            <div className={`text-lg font-black italic mb-2 tracking-tighter ${isSelected ? 'text-amber-400' : 'text-slate-400'}`}>
                              {bank.logoText}
                            </div>
                            <div className="text-xs font-black truncate w-full uppercase">
                              {bank.short}
                            </div>
                            {isSelected && (
                              <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-amber-400" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Copy Account interface */}
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-white space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                            {banks[selectedBank].name} Details
                          </div>
                          <div className="text-xs text-slate-300 font-medium">
                            Please transfer exactly <span className="text-amber-400 font-bold">{cartTotal.toLocaleString()} BIRR</span> using mobile banking or walk-in deposit.
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-black italic text-amber-500 shrink-0 text-xs">
                          {banks[selectedBank].logoText}
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-2 bg-slate-950 p-4 border border-slate-800 rounded-2xl">
                        <div className="min-w-0">
                          <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">ACCOUNT NUMBER</span>
                          <div className="font-mono text-base font-black text-amber-400 tracking-wider truncate select-all">
                            {banks[selectedBank].account}
                          </div>
                        </div>
                        <button
                          onClick={() => handleCopyAccount(banks[selectedBank].account)}
                          className="px-4 py-2 border border-slate-800 hover:border-amber-400 rounded-xl bg-slate-900 text-xs font-bold uppercase tracking-widest text-white transition-all cursor-pointer flex items-center gap-1 shrink-0"
                        >
                          {copied ? (
                            <>
                              <Check size={12} className="text-emerald-400" /> Copied
                            </>
                          ) : (
                            <>
                              <Copy size={12} /> Copy
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Attach Proof Screenshot */}
                  <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-900">
                    <div>
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-1">
                        STEP 2: ATTACH TRANSFER SCREENSHOT
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Upload or drag & drop the photo of your completed transfer screen or paper receipt.
                      </p>
                    </div>

                    {/* Draggable/clickable File Zone */}
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={triggerFileInput}
                      className={`border-4 border-dashed rounded-3xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all min-h-[160px] relative ${
                        isDragging
                          ? 'border-amber-400 bg-amber-400/5'
                          : screenshotFile
                          ? 'border-emerald-500/40 bg-emerald-500/5'
                          : 'border-slate-300 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-400'
                      }`}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                      />

                      {screenshotPreview ? (
                        /* Attached Image Preview View */
                        <div className="w-full space-y-4" onClick={(e) => e.stopPropagation()}>
                          <div className="relative w-32 h-32 mx-auto rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg group">
                            <img
                              src={screenshotPreview}
                              alt="receipt-screenshot"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                              <span className="text-[10px] text-white font-black uppercase tracking-widest">RECEIPT ATTACHED</span>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-black text-slate-900 dark:text-white truncate max-w-sm mx-auto">
                              {screenshotFile?.name}
                            </div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                              {((screenshotFile?.size || 0) / (1024 * 1024)).toFixed(2)} MB
                            </div>
                          </div>
                          <button
                            onClick={removeAttachedFile}
                            className="bg-red-500 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-400 cursor-pointer"
                          >
                            Remove Receipt
                          </button>
                        </div>
                      ) : (
                        /* Empty Upload Trigger View */
                        <div className="space-y-3">
                          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900/60 flex items-center justify-center text-slate-400 dark:text-slate-500 mx-auto">
                            <UploadCloud size={24} />
                          </div>
                          <div>
                            <span className="text-xs font-black uppercase tracking-widest block text-slate-900 dark:text-white">
                              DRAG SCREENSHOT HERE or <span className="text-amber-500 underline">CLICK TO SELECT</span>
                            </span>
                            <span className="text-[10px] text-slate-400 block mt-1 uppercase tracking-widest font-bold">
                              Accepts JPEG, PNG, or transaction snapshots
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Step 4: Contact details */}
                  <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-900">
                    <div>
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-1">
                        STEP 3: IDENTIFY DESIGNATION
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Provide your communication credentials to cross-reference and verify this order.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest flex items-center gap-1">
                          <User size={10} /> Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="E.g., Didiskiya Mulugeta"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full px-4 py-3 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:border-amber-400 focus:outline-none dark:text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest flex items-center gap-1">
                          <Phone size={10} /> Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="E.g., +251 911 234 567"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full px-4 py-3 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:border-amber-400 focus:outline-none dark:text-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest flex items-center gap-1">
                        <Mail size={10} /> Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@domain.com"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="w-full px-4 py-3 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:border-amber-400 focus:outline-none dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Submission triggers */}
                  <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-900">
                    {/* Method 1: Simulated Secure Uplink */}
                    <button
                      onClick={handleSimulatedSecureUplink}
                      className="w-full bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-950 py-4.5 rounded-2xl text-xs font-black uppercase tracking-widest cursor-pointer hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Sparkles size={16} /> Submit Receipt via Secure Server Uplink (Simulated)
                    </button>

                    {/* Method 2: Create structured email package */}
                    <button
                      onClick={handleSendViaEmailClient}
                      className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-900 dark:border-slate-800 py-4.5 rounded-2xl text-xs font-black uppercase tracking-widest cursor-pointer hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <Mail size={16} /> Launch Email Client Draft to lenevovintage@gmail.com
                    </button>

                    <div className="flex items-center justify-center gap-2 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                      <Lock size={10} /> Secured by GENBATA payment verification protocol
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
