# Figure credits and interpretation

## Supplied project outputs

The six newly supplied cfDNA and RNA images are included unchanged. Captions describe what is visible without creating additional statistics or claims. The original three project figures and portrait are also preserved.

- `cfdna_hallmark_pd_ned.png`: supplied Hallmark PD versus NED normalized-enrichment-score plot (FDR < 0.05).
- `cfdna_hallmark_crc_non_cancer.png`: supplied CRC versus non-cancer Hallmark enrichment plot.
- `cfdna_cdx2_coverage.png`: supplied CDX2-site coverage plot. Counts shown in that figure: CRC n=66, non-cancer n=147. These are panel-specific counts.
- `cfdna_cdx2_tracks.png`: supplied CDX2 genomic-track image.
- `rna_template_sequence_comparison.png`: supplied reference/templates/sequence-only comparison. Both predictions are labeled 1.42 Å; the caption does not claim improvement.
- `rna_structure_overlay.png`: supplied RNA structural overlay without an inferred accuracy metric.

## Published HNSCC reference figures

The current HNSCC gallery displays the user-supplied crops `hnscc_cell_umap.png`, `hnscc_cell_composition.png`, and `hnscc_sequencing_workflow.png`, from Liu et al. Figure 1 panels B, E, and A, respectively. They illustrate biological context rather than original portfolio results. Attribution is retained on image-credits.html, accessible through the footer. The cropped composition panel omits the study-group legend; the credits page links to the complete source. The full original figures below remain in the assets for reference but are no longer the gallery slides.

Source: Z. L. Liu, X. Y. Meng, R. J. Bao, M. Y. Shen, J. J. Sun, W. D. Chen, F. Liu and Y. He (2024), Nature Communications 15, 2595. DOI: https://doi.org/10.1038/s41467-024-46912-6

License: Creative Commons Attribution 4.0 International, https://creativecommons.org/licenses/by/4.0/. Reproduced unchanged from publisher image files. No separate figure exclusion was found in the article.

1. `liu2024_fig1.png` — Figure 1, especially UMAP panel B. 120,952 cells from 26 specimens, nine major lineages. Epithelial cells are not all malignant; the authors evaluate malignant status separately in Figure 2 using copy-number inference.
   - Figure: https://www.nature.com/articles/s41467-024-46912-6/figures/1
   - Original: https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41467-024-46912-6/MediaObjects/41467_2024_46912_Fig1_HTML.png
2. `liu2024_fig3.png` — Figure 3, especially UMAP panel E. Myeloid subset (20,306 cells) including macrophage populations labeled SPP1, CXCL10, C1QC, FOLR2, plus monocytes, dendritic cells, mast cells, and proliferating myeloid cells. This subset does not include malignant epithelial cells.
   - Figure: https://www.nature.com/articles/s41467-024-46912-6/figures/3
   - Original: https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41467-024-46912-6/MediaObjects/41467_2024_46912_Fig3_HTML.png

No scientific plot was generated, retouched, or relabeled. The supplied cropped panels are used unchanged. Full-size links are available for legibility.

## Additional atlas and variant assets

The breast-cancer atlas overview, three marker-expression panels, somatic-variant overview and candidate TLOD plot were supplied by Devansh. The overview graphics are identified as project summaries rather than measured UMAPs or genomic tracks. Marker panels are described as annotation review, without claiming that mixed marker signals validate every displayed cell assignment.

`variant_gene_effect_matrix.png` was downloaded unchanged from Devansh's repository:
https://github.com/Daark-Devil/Breast_Cancer_Somatic_Mutation_Analysis/blob/HEAD/main_figures/11871_cancer_gene_effect_matrix.png

The RNA comparison is supported by:
https://github.com/Daark-Devil/RNA-Structure-AI/blob/HEAD/models/openfold3/results/Csvs/4cond_results.tsv

In that table, 1P5P baseline C1′ RMSD is 22.452 Å and the combined approach is 3.565 Å, approximately 84% lower. “Over 70%” is limited to selected cases; it does not describe the aggregate 22-RNA benchmark. Some cases worsened.
