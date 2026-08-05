import type { ReadingCell, ReadingColumn, ReadingRow } from '@/types';
import { cn, formatNumber, statusText } from '@/lib/utils';

interface Props {
  columns: ReadingColumn[];
  rows: ReadingRow[];
  title?: string;
  meta?: string;
  caption?: string;
  className?: string;
}

function cellValue(cell: ReadingCell) {
  if (typeof cell === 'object') return cell.value;
  return cell;
}

function cellStatus(cell: ReadingCell) {
  return typeof cell === 'object' ? cell.status : undefined;
}

/**
 * A page of a real balance report, set as though someone cared. Tabular
 * figures, right-aligned numbers, status carried in colour rather than a
 * separate column.
 */
export default function ReadingTable({ columns, rows, title, meta, caption, className }: Props) {
  return (
    <figure className={cn('panel shadow-panel overflow-hidden', className)}>
      {(title || meta) && (
        <div className="panel-head">
          {title && (
            <figcaption className="font-mono text-xs uppercase tracking-[0.12em] text-ink-900">
              {title}
            </figcaption>
          )}
          {meta && <span className="label-mono">{meta}</span>}
        </div>
      )}

      <div
        className="overflow-x-auto"
        tabIndex={0}
        role="region"
        aria-label={title ? `${title}, scrollable table` : 'Scrollable table'}
      >
        <table className="w-full min-w-[36rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-ink-100 bg-paper-sunken">
              {columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className={cn(
                    'px-4 py-2.5 align-bottom font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-500',
                    col.align === 'right' ? 'text-right' : 'text-left',
                  )}
                >
                  {col.label}
                  {col.unit && <span className="ml-1 normal-case tracking-normal text-ink-500">({col.unit})</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-ink-100 last:border-0 hover:bg-paper-sunken/60">
                {columns.map((col) => {
                  const cell = row.cells[col.key];
                  const status = cellStatus(cell);
                  const raw = cellValue(cell);
                  const value = typeof raw === 'number' ? formatNumber(raw) : raw;
                  return (
                    <td
                      key={col.key}
                      className={cn(
                        'px-4 py-2.5',
                        col.align === 'right' ? 'text-right' : 'text-left',
                        col.mono || typeof raw === 'number' ? 'tabular font-mono' : '',
                        status ? statusText[status] : 'text-ink-700',
                        status === 'deficiency' && 'font-medium',
                      )}
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {caption && (
        <p className="border-t border-ink-100 px-5 py-3 text-xs leading-relaxed text-ink-500">
          {caption}
        </p>
      )}
    </figure>
  );
}
