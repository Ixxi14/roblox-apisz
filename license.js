export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { universeId } = req.body;

    const allowedUniverses = [
        9918740473
    ];

    if (!universeId) {
        return res.status(400).json({
            valid: false,
            message: "No universeId"
        });
    }

    if (!allowedUniverses.includes(universeId)) {
        return res.status(403).json({
            valid: false,
            message: "Licencia inválida"
        });
    }

    return res.status(200).json({
        valid: true,
        message: "Licencia válida"
    });
}
