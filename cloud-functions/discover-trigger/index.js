exports.discoverTrigger = async (event, context) => {
  console.log("📡 Discovery Triggered");

  const file = event.name || "unknown-file";

  return {
    message: "Discovery pipeline started",
    file,
    timestamp: new Date().toISOString()
  };
};