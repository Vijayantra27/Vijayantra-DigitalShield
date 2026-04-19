exports.generateLegalNotice = async (req, res) => {
  const { offender = "@unknown", confidence = 90 } = req.body || {};

  const notice = `
DMCA NOTICE

Unauthorized usage detected.

Offender: ${offender}
Confidence: ${confidence}%

Immediate removal requested.

Guardian Lens AI
`;

  res.json({
    success: true,
    notice
  });
};